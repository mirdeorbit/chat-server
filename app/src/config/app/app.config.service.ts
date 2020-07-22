import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppConfigService {
    private config: object;

    constructor(private configService: ConfigService) {
        this.config = this.configService.get<object>('app');
    }

    get host(): string {
        return this.config.listen.host;
    }

    get port(): number {
        return this.config.listen.port
    }
}