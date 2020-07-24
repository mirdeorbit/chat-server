import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../database/database.module';

import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';

@Module({
    imports: [DatabaseModule],
    controllers: [UsersController],
    providers: [
        UsersService,
        ...usersProviders
    ],
    exports: usersProviders
})

export class UsersModule {}
