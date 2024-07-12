import { IsDate, IsNumber, IsOptional, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class IncomesDto {
  readonly _id: string
  @IsString()
  readonly name: string
  @IsNumber()
  readonly amount: number
  readonly isAutoSet: boolean
  readonly autoIncomeDate: Date
  readonly bankId: ObjectId
  readonly categoryId: ObjectId
  readonly subCategoryId: ObjectId
  readonly createdBy: ObjectId
  readonly isActive: boolean
  readonly createdAt: Date
  readonly updatedAt: Date
}


export class CreateIncomeDto {
  @IsString()
  name: string

  @IsNumber()
  amount: number

  @IsString()
  bankId: string

  @IsString()
  @IsOptional()
  time: string

  @IsString()
  subCategoryId: string

  @IsString()
  categoryId: string

  @IsString()
  @IsOptional()
  createdBy: string

}

export class AutoIncomeDto {
  @IsString()
  name: string

  @IsNumber()
  amount: number

  @IsString()
  bankId: string

  @IsString()
  subCategoryId: string

  @IsString()
  categoryId: string

  @IsString()
  @IsOptional()
  createdBy: string

  @IsDate()
  autoIncomeDate: Date
}