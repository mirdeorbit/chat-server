import { Connection } from 'mongoose';
import { UsersSchema } from './users.schema';

import { USER_MODEL, DATABASE_CONNECTION } from '../../constants';

export const UsersProviders = [
    {
        provide: USER_MODEL,
        useFactory: (connection: Connection) => connection.model('User', UsersSchema),
        inject: [DATABASE_CONNECTION],
    }
];