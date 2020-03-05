import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppConfigService {
    constructor(private configService: ConfigService) {}

    get database(): object {
        return this.configService.get<object>('database');
    }
}