import { IsBoolean, IsEmail, IsNotEmpty, IsNotEmptyObject, IsObject, IsOptional, IsString } from "class-validator"
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


export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  name: string

  @IsOptional()
  createdBy: ObjectId

  @IsOptional()
  @IsBoolean()
  isActive: Boolean
}

export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  @IsBoolean()
  isActive: boolean;
}

export class CategoryIdDto {
  @IsString()
  id: string;
}

export class CategoryFiltersDto {
  @IsOptional()
  isActive: boolean | string;
  
  @IsOptional()
  @IsString()
  name: string;
}