import { IsEmail, IsNotEmptyObject, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class CategoryDto {
    readonly _id: string
    @IsEmail()
    readonly name: string

    @IsNotEmptyObject()
    readonly createdBy: ObjectId
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

