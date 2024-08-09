import { Request, Response } from 'express';
import topicModel from '../models/topicModel';

const getAllTopic = async () => {
    const topics = await topicModel.find({
        deleted: false,
    });

    return topics;
};

export default {
    getAllTopic,
};
