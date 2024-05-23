import { Schema, Types } from 'mongoose';
import { SubCategoryDto } from '../dtos/sub-category.dto';
import constants from '@config/constants';

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
        ref: constants.MODELS.CATEGORIES
    },
    createdBy: {
        type: Types.ObjectId,
        ref: constants.MODELS.USERS
    },
}, {
    timestamps: true,
    collection: constants.MODELS.SUB_CATEGORIES
});