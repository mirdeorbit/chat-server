import { Module } from '@nestjs/common';
import  { databaseProviders } from './database.providers';
import { DatabaseConfigModule } from "../config/database/database.config.module";
import {DatabaseConfigService} from "../config/database/database.config.service";

@Module({
    imports: [DatabaseConfigModule],
    providers: [...databaseProviders],
    exports: [...databaseProviders]
})

export class DatabaseModule {}