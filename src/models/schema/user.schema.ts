import {validateName, validateEmail, validateDob} from '@common/mongovalidator';
import { Schema } from 'mongoose';
import { UserDto } from '../dtos/user.dto';
import {hashSync} from 'bcryptjs';
import constants from '@config/constants';
export const UserSchema =  new Schema<UserDto>({
    firstName: {
        type: String,
        ...validateName
    },
    lastName: {
        type: String,
        ...validateName
    },
    email: {
        type: String,
        ...validateEmail,
        require: true
    },
    password: {
        type: String,
    },
    token: String,
}, {
    timestamps: true,
    collection: constants.MODELS.USERS
})

UserSchema.pre('save', function (next) {
    const user : UserDto = this;
    user.password = hashSync(user.password, 10);
    next();
})
