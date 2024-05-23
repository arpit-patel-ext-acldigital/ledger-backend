import { CustomBadRequest } from './badRequestException'
import { CustomConflictException } from './conflictException'
import { CustomInternalServer } from './internalServerError'
import { CustomNotFoundException } from './notFoundException'
import { CustomUnauthorizedException } from './unAuthorized'
import {ValidationExceptionFilter} from './unprocessableException'

export const responses = [
    new CustomInternalServer(),
    new ValidationExceptionFilter(),
    new CustomConflictException(),
    new CustomBadRequest(),
    new CustomUnauthorizedException(),
    new CustomNotFoundException()
]