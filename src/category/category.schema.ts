import { Schema, Types } from 'mongoose';
import { CategoryDto } from './dto/category.dto';

export const CategorySchema =  new Schema<CategoryDto>({
    name: {
        type: String,
        trim: true,
        require: true,
        unique: true,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: Types.ObjectId,
        ref: 'users'
    },
}, {
    timestamps: true,
    collection: 'categories'
});