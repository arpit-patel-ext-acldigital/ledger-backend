import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CategoryDto, CategoryFiltersDto, CreateCategoryDto } from '@models/dtos/category.dto';
import mongoose, { Model, ObjectId } from 'mongoose';
import constants from '@config/constants';

@Injectable()
export class CategoryService {
    constructor(@InjectModel(constants.MODELS.CATEGORIES) private categoryModel: Model<CategoryDto>
    ) {
    }

    /**
     * create category cervice function
     * @param data accept category information
     * @returns return created category data from database
     */
    async create(data: CreateCategoryDto): Promise<CategoryDto> {
        const newDoc = new this.categoryModel(data);
        return (await newDoc.save()).toJSON()
    }

    /**
     * cet all category list cervice function
     * @param createdBy created by user id 
     * @param filters filter for category
     * @returns return array of category 
     */
    async getAll(createdBy: string, filters: CategoryFiltersDto): Promise<CategoryDto[]> {        
        return this.categoryModel.find({
            createdBy: new mongoose.Types.ObjectId(createdBy),
            ...filters
        });
    }

    /**
     * get category details  
     * @param createdBy created by user id 
     * @param value value key id
     * @param field field name
     * @returns return object of category
     */
    async get(createdBy: string | undefined, value: string, field = '_id'): Promise<CategoryDto> {
        const d: CategoryDto = await this.categoryModel.findOne({
            [`${field}`]: value,
            ...(createdBy && { createdBy: new mongoose.Types.ObjectId(createdBy) })
        })
        return d;
    }

    /**
     * update category details
     * @param _id category id
     * @param updateData update category data
     * @returns return object of category
     */
    async update(_id: string, updateData: any): Promise<CategoryDto> {
        return await this.categoryModel.findByIdAndUpdate(_id, updateData, { new: true });
    }

    /**
     * delete category details
     * @param _id category id
     * @returns return found category object
     */
    async deleteOne(createdBy: string, _id: string): Promise<CategoryDto> {
        return await this.categoryModel.findOneAndDelete({
            _id,
            createdBy
        });
    }

}
