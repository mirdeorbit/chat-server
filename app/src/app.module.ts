import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { MorganMiddleware } from '@nest-middlewares/morgan';

import { DatabaseModule } from './database/database.module';

import { UsersModule } from './modules/users/users.module';
import { AuthModule } from './modules/auth/auth.module';

import { AppConfigModule } from './config/app/app.config.module';

@Module({
    imports: [
        AppConfigModule,
        DatabaseModule,
        UsersModule,
        AuthModule
    ]
})

export class AppModule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        MorganMiddleware.configure(':date - :method - :url - :response-time - :status');
        consumer.apply(MorganMiddleware).forRoutes('*');
    }
}