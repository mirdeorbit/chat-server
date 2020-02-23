import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    getMe(): string {
        return 'Hello World!';
    }
}