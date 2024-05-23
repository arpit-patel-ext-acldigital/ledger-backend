import { Schema, Types } from 'mongoose';
import { ExpenseHistoryDto } from '../dtos/expenseHistory.dto';
import constants from '@config/constants';

export const ExpenseHistorySchema =  new Schema<ExpenseHistoryDto>({
    name: {
        type: String,
        trim: true,
        require: true
    },
    amount: {
        type: Number,
        require: true
    },
    fromBank: {
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
    familyId: {
        type: Types.ObjectId,
        ref: constants.MODELS.FAMILIES
    }
}, {
    timestamps: true,
    collection: constants.MODELS.EXPENSE_HISTORY
});