import { Schema, Types } from 'mongoose';
import { CategoryDto } from '../dtos/category.dto';
import constants from '@config/constants';

const devices = {
    serialNumber: String
}
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
        ref: constants.MODELS.USERS
    },
}, {
    timestamps: true,
    collection: constants.MODELS.CATEGORIES
});