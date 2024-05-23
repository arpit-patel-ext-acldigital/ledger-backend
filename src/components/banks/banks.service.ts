import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import constants from '@config/constants';
import { Model } from 'mongoose';
import { BanksDto } from '@models/dtos/banks.dto';

@Injectable()
export class BanksService {
    constructor(@InjectModel(constants.MODELS.BANKS) private bankModel : Model<BanksDto> ) {}

    async create(data: BanksDto): Promise<BanksDto> {
        const newDoc = new this.bankModel(data);
        return (await newDoc.save()).toJSON()
    }

    async getAll(): Promise<BanksDto[]> {
        return this.bankModel.find();
    }

    async get(value: string, field = '_id'): Promise<BanksDto> {
        const d : BanksDto = await this.bankModel.findOne({
            [`${field}`] : value
        })
        return d;
    }

    async update(_id: string, updateData: any) : Promise<BanksDto> {
        return await this.bankModel.findByIdAndUpdate(_id, updateData, {new : true});
    }

    async deleteOne(_id: string): Promise<BanksDto> {
        return await this.bankModel.findByIdAndDelete(_id);
    }
}

