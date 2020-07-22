import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../database/database.module';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { UsersProviders } from './users.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        UsersService,
        ...UsersProviders
    ],
    exports: UsersProviders
})

export class UsersModule {}
