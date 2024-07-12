import { IncomesHistoryDto } from '@models/dtos/incomeHistory.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import constants from '@config/constants' ;
import { Model } from 'mongoose';
import { IncomesDto, CreateIncomeDto } from '@models/dtos/incomes.dto';

@Injectable()
export class IncomeHistoryService {
    constructor(@InjectModel(constants.MODELS.INCOME_HISTORY) private incomeHistoryModel : Model<IncomesHistoryDto>) {}

    async create(data: CreateIncomeDto): Promise<IncomesHistoryDto> {
        const newDoc = new this.incomeHistoryModel(data);
        return (await newDoc.save()).toJSON()
    }

    async getAll(authUser: string): Promise<IncomesDto[]> {
        return this.incomeHistoryModel.find({
            
        });
    }
    // async getAll(categoryId: string | undefined, authUser: string): Promise<CategoryDto[]> {
    //     return this.subCategoryModel.find({
    //         ...(categoryId && {
    //             categoryId: new mongoose.Types.ObjectId(categoryId)
    //         }),
    //         ...(authUser && {
    //             createdBy: new mongoose.Types.ObjectId(authUser)
    //         })
            
    //     });
    // }

    // async get(createdBy: string | undefined, value: string, field = '_id'): Promise<CategoryDto> {
    //     const d: CategoryDto = await this.subCategoryModel.findOne({
    //         [`${field}`]: value,
    //         ...(createdBy && { createdBy: new mongoose.Types.ObjectId(createdBy) })
    //     })
    //     return d;
    // }

    // async update(_id: string, updateData: any): Promise<CategoryDto> {
    //     return await this.subCategoryModel.findByIdAndUpdate(_id, updateData, { new: true });
    // }

    // async deleteOne(createdBy: string, _id: string): Promise<CategoryDto> {
    //     return await this.subCategoryModel.findOneAndDelete({_id, createdBy});
    // }
}
