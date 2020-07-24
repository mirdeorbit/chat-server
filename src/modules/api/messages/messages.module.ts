import { Module } from '@nestjs/common';

import { DatabaseModule } from '../../../database/database.module';

import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { messagesProviders } from './messages.providers';
import { UsersModule } from '../users/users.module';
import { ChatsModule } from '../chats/chats.module';

@Module({
    imports: [DatabaseModule, UsersModule, ChatsModule],
    controllers: [MessagesController],
    providers: [
        MessagesService,
        ...messagesProviders
    ],
    exports: messagesProviders
})

export class MessagesModule {}
