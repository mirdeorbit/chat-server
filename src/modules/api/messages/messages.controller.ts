import { Controller, Get, Req, Post } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { Request, Response } from 'express';
import { Message } from '../../../interfaces/message.interface';

@Controller('messages')
export class MessagesController {
    constructor(private readonly messagesService: MessagesService) {}

    @Get('me')
    async getMe(@Req() req: Request): Promise<Message> {
        return this.messagesService.getMe(req.query.token);
    }

    @Post()
    async create(@Req() req: Request): Promise<Message> {
        return this.messagesService.create(req.body);
    }
}