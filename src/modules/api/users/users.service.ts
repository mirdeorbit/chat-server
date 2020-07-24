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

    /**
     * @param params - parameters object
     * @param params.query - query string
     */
    async get(params: Object): Promise<User[]> {
        const condition = {};

        if (params.query) {
            condition.email = {$regex: new RegExp(params.query, 'i')};
        }

        return this.userModel.find(condition, {email: 1, _id: 1});
    }
}