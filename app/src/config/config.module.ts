import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

import { AppConfigService } from './config.service';

import databaseConfig from './development/database.config';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [databaseConfig]
        })
    ],
    providers: [AppConfigService, ConfigService],
    exports: [AppConfigService, ConfigService]
})

export class AppConfigModule {}