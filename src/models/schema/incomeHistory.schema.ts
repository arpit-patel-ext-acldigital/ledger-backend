import { Schema, Types } from 'mongoose';
import constants from '@config/constants';
import { IncomesHistoryDto } from '@models/dtos/incomeHistory.dto';

export const IncomeHistorySchema =  new Schema<IncomesHistoryDto>({
    name: {
        type: String,
        trim: true,
        require: true
    },
    amount: {
        type: Number,
        require: true
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
    collection: constants.MODELS.INCOME_HISTORY
});