import * as mongoose from 'mongoose';

export const MessagesSchema = new mongoose.Schema({
    text: String,
    chatId: String,
    date: Date,
    userId: String
});