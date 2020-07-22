import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppConfigService } from './config/app/app.config.service';

declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(AppModule, { cors: true });

	const appConfig: AppConfigService = app.get('AppConfigService');

	await app.listen(appConfig.port);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}

bootstrap();
