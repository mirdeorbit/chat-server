import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../../interfaces/user.interface';
import { USER_MODEL } from '../../../constants';

@Injectable()
export class UsersService {
    constructor(
        @Inject(USER_MODEL)
        private userModel: Model<User>,
    ) {}

    async getMe(token: string): Promise<User> {
        return this.userModel.findOne({token: token});
    }
}