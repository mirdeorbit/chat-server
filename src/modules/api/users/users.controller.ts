import { Controller, Get, Req, Res } from '@nestjs/common';
import { UsersService } from './users.service';
import { Request, Response } from 'express';
import { User } from '../../../interfaces/user.interface';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('me')
    async getMe(@Req() req: Request): Promise<User> {
        return this.usersService.getMe(req.query.token);
    }

    @Get()
    async get(@Req() req: Request): Promise<User[]> {
        return this.usersService.get(req.query);
    }
}