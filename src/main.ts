import { NestFactory } from '@nestjs/core';
import { ApiModule } from './modules/api/api.module';
import { AppConfigService } from './config/app/app.config.service';

declare const module: any;

async function bootstrap() {
	const app = await NestFactory.create(ApiModule, { cors: true });

	const appConfig: AppConfigService = app.get('AppConfigService');

	app.setGlobalPrefix('/api/1.0');

	await app.listen(appConfig.port);

	if (module.hot) {
		module.hot.accept();
		module.hot.dispose(() => app.close());
	}
}

bootstrap();
