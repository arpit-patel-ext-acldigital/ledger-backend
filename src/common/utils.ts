import * as jwt from 'jsonwebtoken'

export const encryptToken = async (data) => {
    return jwt.sign(data, 'teasdasdasd');
} 

export const verifyToken = async (token) => {
    return jwt.verify(token, 'teasdasdasd');
}

export const decodeToken = async (token) => {
    return jwt.decode(token);
}
