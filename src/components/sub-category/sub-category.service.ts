import constants from '@config/constants';
import { CategoryDto } from '@models/dtos/category.dto';
import { CreateSubCategoryDto, SubCategoryDto } from '@models/dtos/sub-category.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class SubCategoryService {
    constructor(@InjectModel(constants.MODELS.SUB_CATEGORIES) private subCategoryModel: Model<SubCategoryDto>) { }

    async create(data: CreateSubCategoryDto): Promise<CategoryDto> {
        const newDoc = new this.subCategoryModel(data);
        return (await newDoc.save()).toJSON()
    }

    async getAll(categoryId: string | undefined, authUser: string): Promise<CategoryDto[]> {
        return this.subCategoryModel.find({
            ...(categoryId && {
                categoryId: new mongoose.Types.ObjectId(categoryId)
            }),
            ...(authUser && {
                createdBy: new mongoose.Types.ObjectId(authUser)
            })
            
        });
    }

    async get(createdBy: string | undefined, value: string, field = '_id'): Promise<CategoryDto> {
        const d: CategoryDto = await this.subCategoryModel.findOne({
            [`${field}`]: value,
            ...(createdBy && { createdBy: new mongoose.Types.ObjectId(createdBy) })
        })
        return d;
    }

    async update(_id: string, updateData: any): Promise<CategoryDto> {
        return await this.subCategoryModel.findByIdAndUpdate(_id, updateData, { new: true });
    }

    async deleteOne(createdBy: string, _id: string): Promise<CategoryDto> {
        return await this.subCategoryModel.findOneAndDelete({_id, createdBy});
    }
}
