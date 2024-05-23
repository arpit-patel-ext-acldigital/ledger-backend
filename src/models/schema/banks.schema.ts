import { Schema, Types } from 'mongoose';
import { BanksDto } from '../dtos/banks.dto';
import constants from '@config/constants';

export const BanksSchema =  new Schema<BanksDto>({
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
    collection: constants.MODELS.BANKS
});