import { Schema, Types } from 'mongoose';
import { SubCategoryDto } from './dto/sub-category';

export const SubCategorySchema =  new Schema<SubCategoryDto>({
    name: {
        type: String,
        trim: true,
        require: true
    },
    isActive: {
        type: Boolean,
        default: true,
    },
    categoryId: {
        type: Types.ObjectId,
        ref: 'categories'
    },
    createdBy: {
        type: Types.ObjectId,
        ref: 'users'
    },
}, {
    timestamps: true,
    collection: 'subcategories'
});