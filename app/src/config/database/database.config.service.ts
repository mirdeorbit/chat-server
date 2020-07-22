import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConfigService {
    private config: object;

    constructor(private configService: ConfigService) {
        this.config = this.configService.get<object>('database');
    }

    get url(): string {
        return this.config.url;
    }

    get options(): object {
        return this.config.options
    }
}