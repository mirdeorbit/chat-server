import _ from 'underscore';
import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../../interfaces/user.interface';
import { Chat } from '../../../interfaces/chat.interface';
import { USER_MODEL, CHAT_MODEL } from '../../../constants';

@Injectable()
export class ChatsService {
    constructor(
        @Inject(USER_MODEL)
        private userModel: Model<User>,
        @Inject(CHAT_MODEL)
        private chatModel: Model<Chat>,
    ) {}

    async getMe(token: string): Promise<Chat[]> {
        const currentUser =  this.userModel.findOne({token: token});

        if (currentUser) {
            return this.chatModel.find({participantIds: currentUser._id});
        } else {
            return [];
        }
    }

    async create(params: Object): Promise<Chat> {
        const user = await this.userModel.findOne({token: params.token});

        if (!user) {
            throw new Error('Current user not found');
        }

        const participants = _([user._id.toString(), ...params.chat.participants]).uniq();

        const existingChat = await this.chatModel.findOne({
            participants: {
                $all: participants
            }
        });

        if (existingChat) {
            return existingChat;
        } else {
            const chat = new this.chatModel({ participants, ...params.chat });
            return chat.save();
        }
    }
}