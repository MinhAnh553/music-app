import mongoose from 'mongoose';

const topicSchema = new mongoose.Schema(
    {
        title: String,
        avatar: String,
        description: String,
        status: String,
        slug: String,
        deleted: {
            type: Boolean,
            default: false,
        },
        deletedAt: Date,
    },
    {
        timestamps: true,
    },
);

const topicModel = mongoose.model('topic', topicSchema, 'topics');

export default topicModel;
