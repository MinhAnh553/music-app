import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import songService from '../services/songService';
import singerService from '../services/singerService';

// [GET] /songs/:slugTopic
const listSong = async (req: Request, res: Response) => {
    try {
        const slugTopic: string = req.params.slugTopic;
        const songs = await songService.getSongInTopic(slugTopic);
        if (songs) {
            for (const song of songs) {
                const singer = await singerService.getSingerById(song.singerId);

                song['infoSinger'] = singer;
            }
        }

        res.render('client/pages/song/list', {
            pageTitle: 'Chủ đề bài hát',
            songs: songs,
        });
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({
            message: 'Không tìm thấy!',
        });
    }
};

export default {
    listSong,
};
