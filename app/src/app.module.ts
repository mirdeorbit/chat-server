import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MorganMiddleware } from '@nest-middlewares/morgan';

import { DatabaseModule } from './database/database.module';

import { UsersModule } from './modules/users/users.module';

@Module({
    imports: [
        DatabaseModule,
        UsersModule
    ]
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(MorganMiddleware).forRoutes('*');
    }
}