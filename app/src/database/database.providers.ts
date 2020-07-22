import * as mongoose from 'mongoose';
import { DatabaseConfigService } from "../config/database/database.config.service";

import { DATABASE_CONNECTION } from '../constants';

export const databaseProviders = [
    {
        provide: DATABASE_CONNECTION,
        useFactory: (databaseConfigService: DatabaseConfigService): Promise<typeof mongoose> => {
            return mongoose.connect(databaseConfigService.url, databaseConfigService.options);
        },
        inject: [DatabaseConfigService]
    }
];