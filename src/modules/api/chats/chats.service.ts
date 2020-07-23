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
}