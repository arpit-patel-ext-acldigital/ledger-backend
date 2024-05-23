import { Inject, Injectable } from '@nestjs/common';
import  { UserDto } from '@models/dtos/user.dto';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import constants from '@config/constants';

@Injectable()
export class UserService {
    constructor(@InjectModel(constants.MODELS.USERS) private userModel: Model<UserDto>) {}

    async create(userData: UserDto): Promise<UserDto> {
        const newUser = new this.userModel(userData);
        return (await newUser.save()).toJSON()
    }

    async getAll(): Promise<UserDto[]> {
        return this.userModel.find();
    }

    async get(value: string, field = '_id'): Promise<UserDto> {
        const d : UserDto = await this.userModel.findOne({
            [`${field}`] : value
        })
        return d;
    }

    async update(_id: string, updateData: any) : Promise<UserDto> {
        return await this.userModel.findByIdAndUpdate(_id, updateData, {new : true});
    }
}
