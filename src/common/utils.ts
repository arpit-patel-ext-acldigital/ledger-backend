import * as jwt from 'jsonwebtoken'
import * as enMessages from '@config/messages/en.json'
export const encryptToken = async (data) => {
    return jwt.sign(data, 'teasdasdasd', {expiresIn: '2 days'});
} 

export const verifyToken = async (token) => {
    return jwt.verify(token, 'teasdasdasd');
}

export const decodeToken = async (token) => {
    return jwt.decode(token);
}

export const getMessage = (message : string, language : string) : string => {
    return enMessages[`${message}`] ?? message;
}