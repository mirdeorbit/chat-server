import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../database/database.module';

import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { chatProviders } from './chats.providers';
import { UsersModule } from '../users/users.module';

@Module({
    imports: [DatabaseModule, UsersModule],
    controllers: [ChatsController],
    providers: [
        ChatsService,
        ...chatProviders
    ]
})

export class ChatsModule {}
