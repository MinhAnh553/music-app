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

const getTopicBySlug = async (slugTopic: string) => {
    try {
        const topic = await topicModel.findOne({
            slug: slugTopic,
            deleted: false,
        });

        return topic;
    } catch (error) {
        throw error;
    }
};

export default {
    getAllTopic,
    getTopicBySlug,
};
