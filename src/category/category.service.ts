import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryDto } from './dto/category.dto';
import { Model } from 'mongoose';

@Injectable()
export class CategoryService {
    constructor(@InjectModel('categories') private categoryModel : Model<CategoryDto> ) {}

    async create(data: CategoryDto): Promise<CategoryDto> {
        const newDoc = new this.categoryModel(data);
        return (await newDoc.save()).toJSON()
    }

    async getAll(): Promise<CategoryDto[]> {
        return this.categoryModel.find();
    }

    async get(value: string, field = '_id'): Promise<CategoryDto> {
        const d : CategoryDto = await this.categoryModel.findOne({
            [`${field}`] : value
        })
        return d;
    }

    async update(_id: string, updateData: any) : Promise<CategoryDto> {
        return await this.categoryModel.findByIdAndUpdate(_id, updateData, {new : true});
    }

    async deleteOne(_id: string): Promise<CategoryDto> {
        return await this.categoryModel.findByIdAndDelete(_id);
    }
}
