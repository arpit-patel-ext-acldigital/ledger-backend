import { Schema, Types } from 'mongoose';
import { FamiliesDto } from '../dtos/families.dto';
import constants from '@config/constants';

export const FamiliesSchema =  new Schema<FamiliesDto>({
    name: {
        type: String,
        trim: true,
        require: true
    },
    admin: {
        type: Schema.ObjectId,
        require: true
    },
    members: [{
        type: Schema.ObjectId,
        ref: constants.MODELS.USERS
    }],
    requests: [{
        type: Schema.ObjectId,
        ref: constants.MODELS.USERS
    }],
    createdBy: {
        type: Types.ObjectId,
        ref: constants.MODELS.USERS
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true,
    collection: constants.MODELS.FAMILIES
});