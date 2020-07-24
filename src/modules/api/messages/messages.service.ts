import _ from 'underscore';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../../interfaces/user.interface';
import { Message } from '../../../interfaces/message.interface';
import { Chat } from '../../../interfaces/chat.interface';

import { USER_MODEL, MESSAGE_MODEL, CHAT_MODEL } from '../../../constants';

@Injectable()
export class MessagesService {
    constructor(
        @Inject(USER_MODEL)
        private userModel: Model<User>,
        @Inject(MESSAGE_MODEL)
        private messageModel: Model<Message>,
        @Inject(CHAT_MODEL)
        private chatModel: Model<Chat>,
    ) {}

    async getMe(token: string): Promise<Message> {
        const currentUser = await this.userModel.findOne({token: token});

        const currentUserChats = await this.chatModel.find({participants: currentUser._id});

        return this.messageModel.find({chatId: {$in: _(currentUserChats).pluck('_id')}});
    }

    /**
     * @param params - parameters object
     * @param params.query - query string
     */
    async create(params: Object): Promise<Message> {
        const currentUser = await this.userModel.findOne({token: params.token});

        const message = new this.messageModel(params.message);
        message.userId = currentUser._id;
        return message.save();
    }
}