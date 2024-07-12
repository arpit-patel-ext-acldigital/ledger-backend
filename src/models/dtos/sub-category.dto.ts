import {  IsOptional, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class SubCategoryDto {
    readonly _id: ObjectId
    @IsString()
    readonly name: string

    readonly categoryId: ObjectId
    readonly createdBy: ObjectId
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

export class CategoryIdFromSubDto {
  @IsString()
  @IsOptional()
  readonly categoryId : string
}

export class SubCategoryIdDto {

  @IsString()
  readonly id: string
}

export class CreateSubCategoryDto {
  @IsString()
  readonly name: string

  @IsString()
  readonly categoryId: string

  @IsString()
  @IsOptional()
  readonly createdBy: string
}

export class UpdateSubCategoryDto {
  @IsString()
  @IsOptional()
  readonly name: string

  @IsString()
  @IsOptional()
  readonly categoryId: string

  @IsString()
  @IsOptional()
  readonly isActive: boolean
}