import { Request, Response } from 'express';
import topicService from '../services/topicService';

const listTopic = async (req: Request, res: Response) => {
    const topics = await topicService.getAllTopic();
    console.log('MinhAnh553: listTopic -> topics', topics);

    res.render('client/pages/topic/index', {
        pageTitle: 'Chủ đề bài hát',
    });
};

export default {
    listTopic,
};
