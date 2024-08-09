import { Request, Response } from 'express';
import songModel from '../models/songModel';
import topicService from './topicService';

const getSongInTopic = async (slugTopic: string) => {
    try {
        const topic = await topicService.getTopicBySlug(slugTopic);
        if (topic) {
            const songs = await songModel.find({
                topicId: topic.id,
                status: 'active',
                deleted: false,
            });

            return songs;
        }
    } catch (error) {
        throw error;
    }
};

export default {
    getSongInTopic,
};
