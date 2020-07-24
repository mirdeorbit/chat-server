import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MorganMiddleware } from '@nest-middlewares/morgan';

import { DatabaseModule } from '../../database/database.module';

import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ChatsModule } from './chats/chats.module';
import { MessagesModule } from './messages/messages.module';

import { AppConfigModule } from '../../config/app/app.config.module';
import { WebsocketGateway } from './websocket.gateway';

@Module({
    imports: [
        AppConfigModule,
        DatabaseModule,
        UsersModule,
        AuthModule,
        ChatsModule,
        MessagesModule
    ],
    providers: [WebsocketGateway]
})

export class ApiModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(MorganMiddleware).forRoutes('*');
    }
}