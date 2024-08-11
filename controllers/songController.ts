import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import songService from '../services/songService';
import singerService from '../services/singerService';
import topicService from '../services/topicService';

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

// [GET] /songs/:slugSong
const detailSong = async (req: Request, res: Response) => {
    try {
        const slugSong: string = req.params.slugSong;
        const song = await songService.getSongBySlug(slugSong);
        const singer = await singerService.getSingerById(song.singerId);
        const topic = await topicService.getTopicById(song.topicId);

        song['infoSinger'] = singer;
        song['infoTopic'] = topic;

        res.render('client/pages/song/detail', {
            pageTitle: 'Chủ đề bài hát',
            song: song,
        });
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({
            message: 'Không tìm thấy!',
        });
    }
};

export default {
    listSong,
    detailSong,
};
