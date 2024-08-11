import { Request, Response } from 'express';
import singerModel from '../models/singerModel';

const getSingerById = async (id: string) => {
    try {
        const singer = await singerModel
            .findOne({
                _id: id,
                status: 'active',
                deleted: false,
            })
            .select('fullName');

        return singer;
    } catch (error) {
        throw error;
    }
};

export default {
    getSingerById,
};
