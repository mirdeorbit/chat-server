import { Connection } from 'mongoose';
import { UsersSchema } from '../../../database/schemas/users.schema';

import { USER_MODEL, DATABASE_CONNECTION } from '../../../constants';

export const usersProviders = [
    {
        provide: USER_MODEL,
        useFactory: (connection: Connection) => connection.model('User', UsersSchema),
        inject: [DATABASE_CONNECTION],
    }
];