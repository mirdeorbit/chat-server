import { Connection } from 'mongoose';
import { MessagesSchema } from '../../../database/schemas/messages.schema';

import { MESSAGE_MODEL, DATABASE_CONNECTION } from '../../../constants';

export const messagesProviders = [
    {
        provide: MESSAGE_MODEL,
        useFactory: (connection: Connection) => connection.model('Message', MessagesSchema),
        inject: [DATABASE_CONNECTION],
    }
];