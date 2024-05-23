import constants from '@config/constants';
import { CategoryDto } from '@models/dtos/category.dto';
import { SubCategoryDto } from '@models/dtos/sub-category.dto';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import mongoose, { Model } from 'mongoose';

@Injectable()
export class SubCategoryService {
    constructor(@InjectModel(constants.MODELS.SUB_CATEGORIES) private subCategoryModel : Model<SubCategoryDto> ) {}

    async create(data: CategoryDto): Promise<CategoryDto> {
        const newDoc = new this.subCategoryModel(data);
        return (await newDoc.save()).toJSON()
    }

    async getAll(categoryId: string | undefined): Promise<CategoryDto[]> {
        console.log({...(categoryId && {
            _id: new mongoose.Types.ObjectId(categoryId)
        })});
        return this.subCategoryModel.find({...(categoryId && {
            categoryId: new mongoose.Types.ObjectId(categoryId)
        })});
    }

    async get(value: string, field = '_id'): Promise<CategoryDto> {
        const d : CategoryDto = await this.subCategoryModel.findOne({
            [`${field}`] : value
        })
        return d;
    }

    async update(_id: string, updateData: any) : Promise<CategoryDto> {
        return await this.subCategoryModel.findByIdAndUpdate(_id, updateData, {new : true});
    }

    async deleteOne(_id: string): Promise<CategoryDto> {
        return await this.subCategoryModel.findByIdAndDelete(_id);
    }
}
