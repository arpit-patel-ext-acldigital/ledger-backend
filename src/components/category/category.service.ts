import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryDto } from '@models/dtos/category.dto';
import mongoose, { Model } from 'mongoose';
import constants from '@config/constants';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(constants.MODELS.CATEGORIES) private categoryModel : Model<CategoryDto> ) {}

    async create(data: CategoryDto): Promise<CategoryDto> {
        const newDoc = new this.categoryModel(data);
        return (await newDoc.save()).toJSON()
    }

    async getAll(createdBy: string): Promise<CategoryDto[]> {
        return this.categoryModel.find({
            createdBy: new mongoose.Types.ObjectId(createdBy)
        });
    }

    async get(value: string, field = '_id', createdBy: string | undefined): Promise<CategoryDto> {
        const d : CategoryDto = await this.categoryModel.findOne({
            [`${field}`] : value,
            ...(createdBy && {createdBy: new mongoose.Types.ObjectId(createdBy)})
        })
        return d;
    }

    async update(_id: string, updateData: any) : Promise<CategoryDto> {
        return await this.categoryModel.findByIdAndUpdate(_id, updateData, {new : true});
    }

    async deleteOne(_id: string): Promise<CategoryDto> {
        return await this.categoryModel.findByIdAndDelete(_id);
    }

    async updateArray(_id: string, subCategorys: [string]): Promise<CategoryDto> {
        return await this.categoryModel.findOneAndUpdate({
            _id
        }, {
            $pull: {
                "subCategoryIds": {
                    "serialNumber" : {
                        $in: subCategorys
                    }
                }
            }
        })
    }
}
