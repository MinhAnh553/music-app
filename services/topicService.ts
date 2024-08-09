import { Request, Response } from 'express';
import topicModel from '../models/topicModel';

const getAllTopic = async () => {
    try {
        const topics = await topicModel.find({
            deleted: false,
        });

        return topics;
    } catch (error) {
        throw error;
    }
};

export default {
    getAllTopic,
};
