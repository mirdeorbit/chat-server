import { Controller, Get, Req, Res } from '@nestjs/common';
import { ChatsService } from './chats.service';
import { Request, Response } from 'express';
import { Chat } from '../../../interfaces/chat.interface';

@Controller('chats')
export class ChatsController {
    constructor(private readonly chatsService: ChatsService) {}

    @Get('me')
    async getMe(@Req() req: Request): Promise<Chat> {
        return this.chatsService.getMe(req.query.token);
    }
}