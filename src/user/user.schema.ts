import * as mongoose from 'mongoose';
import {User} from './user';
import {validateName, validateEmail, validateDob} from '../common/mongovalidator';
import { Schema } from 'mongoose';

const documentSchema =  new Schema<User>({
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
}, {
    timestamps: true,
    collection: 'users'
})

export default mongoose.model('users',documentSchema);