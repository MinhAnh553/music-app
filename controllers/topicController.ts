import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import topicService from '../services/topicService';

// [GET] /topic
const listTopic = async (req: Request, res: Response) => {
    try {
        const topics = await topicService.getAllTopic();
        console.log('MinhAnh553: listTopic -> topics', topics);

        res.render('client/pages/topic/index', {
            pageTitle: 'Chủ đề bài hát',
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
