import { Document } from 'mongoose';

export interface Chat extends Document {
    readonly title: string;
    readonly participantIds: [string];
}