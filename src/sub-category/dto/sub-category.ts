import {  IsString } from "class-validator"

export class SubCategoryDto {
    readonly _id: string
    @IsString()
    readonly name: string

    readonly categoryId: object
    readonly createdBy: object
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

