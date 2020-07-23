import * as mongoose from 'mongoose';

export const ChatsSchema = new mongoose.Schema({
    title: String,
    participantIds: [Number],
});