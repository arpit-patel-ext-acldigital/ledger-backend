import { Schema, Types } from 'mongoose';
import constants from '@config/constants';
import { IncomesDto } from '@models/dtos/incomes.dto';

export const IncomeSchema =  new Schema<IncomesDto>({
    name: {
        type: String,
        trim: true,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    isAutoSet: {
        type: Boolean,
        default: true
    },
    autoIncomeDate: {
        type: Date,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    bankId: {
        type: Schema.ObjectId,
        ref: constants.MODELS.BANKS
    },
    subCategoryId: {
        type: Schema.ObjectId,
        ref: constants.MODELS.SUB_CATEGORIES
    },
    categoryId: {
        type: Schema.ObjectId,
        ref: constants.MODELS.CATEGORIES
    },
    createdBy: {
        type: Types.ObjectId,
        ref: constants.MODELS.USERS
    },
}, {
    timestamps: true,
    collection: constants.MODELS.INCOMES
});