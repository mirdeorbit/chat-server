import { Document } from 'mongoose';

export interface Message extends Document {
    readonly text: string;
    readonly chatId: string;
    readonly userId: string,
    readonly date: Date
}