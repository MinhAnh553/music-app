import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import topicService from '../services/topicService';

// [GET] /topic
const listTopic = async (req: Request, res: Response) => {
    try {
        const topics = await topicService.getAllTopic();

        res.render('client/pages/topic/index', {
            pageTitle: 'Chủ đề bài hát',
            topics: topics,
        });
    } catch (error) {
        res.status(StatusCodes.NOT_FOUND).json({
            message: 'Không tìm thấy!',
        });
    }
};

export default {
    listTopic,
};
