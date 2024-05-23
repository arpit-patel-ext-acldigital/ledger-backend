import {  IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class SubCategoryDto {
    readonly _id?: ObjectId
    @IsString()
    readonly name: string

    readonly categoryId: ObjectId
    readonly createdBy: ObjectId
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

