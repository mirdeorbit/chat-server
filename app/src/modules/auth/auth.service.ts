import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../interfaces/user.interface';

import { USER_MODEL } from '../../constants';

@Injectable()
export class AuthService {
    constructor(
        @Inject(USER_MODEL)
        private userModel: Model<User>,
    ) {}

    async signup(authData: object): Promise<User> {

        const existingUser = await this.userModel.findOne({email: authData.email});

        if (existingUser) {
            return existingUser
        } else {
            const createdUser = new this.userModel(authData);

            console.log(createdUser);

            return createdUser.save();
        }
    }
}