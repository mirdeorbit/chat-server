import { Connection } from 'mongoose';
import { ChatsSchema } from '../../../database/schemas/chats.schema';

import { CHAT_MODEL, USER_MODEL, DATABASE_CONNECTION } from '../../../constants';

export const chatProviders = [
    {
        provide: CHAT_MODEL,
        useFactory: (connection: Connection) => connection.model('Chat', ChatsSchema),
        inject: [DATABASE_CONNECTION],
    }
];