import { Schema, Types } from 'mongoose';
import { ExpenseDto } from '../dtos/expenses.dto';
import constants from '@config/constants';

export const ExpenseSchema =  new Schema<ExpenseDto>({
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
    autoExpenseDate: {
        type: Date,
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
    isActive: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    collection: constants.MODELS.EXPENSES
});