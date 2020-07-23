import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';
import { User } from '../../../interfaces/user.interface';

import { USER_MODEL } from '../../../constants';

import * as helpers from '../../../utils/helpers';

@Injectable()
export class AuthService {
    constructor(
        @Inject(USER_MODEL)
        private userModel: Model<User>,
    ) {}

    async signup(authData: object): Promise<User> {

        const existingUser = await this.userModel.findOne({email: authData.email});

        const token = helpers.generateToken(existingUser.password);

        if (existingUser) {
            existingUser.token = token;
            return await existingUser.save();
        } else {
            const createdUser = new this.userModel({ token, ...authData });

            return createdUser.save();
        }
    }
}