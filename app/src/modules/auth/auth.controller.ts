import { Controller, Post, Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request} from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signin')
    async signin(@Req() req: Request): Promise<User> {

    }

    @Post('signup')
    async signup(@Req() req: Request): Promise<User> {
        return this.authService.signup(req.body);
    }

}
