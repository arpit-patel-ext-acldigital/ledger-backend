import { Inject, Injectable } from '@nestjs/common';
import  {User} from './user';
import { Model } from 'mongoose';
import userSchema from './user.schema';

@Injectable()
export class UserService {
    userModel = userSchema
    constructor() {
    }

    async create(userData: User): Promise<User> {
        const newUser = new this.userModel(userData);
        return newUser.save()
    }

    async getAll(): Promise<User[]> {
        console.log(this.userModel);
        console.log(await this.userModel.find());
        return this.userModel.find();
    }
}
