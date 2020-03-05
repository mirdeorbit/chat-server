import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppConfigModule } from '../config/config.module';
import { AppConfigService } from '../config/config.service';

@Module({
    imports: [TypeOrmModule.forRootAsync({
        imports: [AppConfigModule],
        inject: [AppConfigService],
        useFactory: async (config: AppConfigService) => config.database
    })]
})

export class DatabaseModule {}