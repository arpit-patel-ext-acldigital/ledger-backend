import { IsDate, IsNumber, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class IncomesHistoryDto {
    readonly _id: string
    
    @IsString()
    readonly name: string
    @IsNumber()
    readonly amount: number
    
    @IsDate()
    readonly time: Date
    readonly bankId: ObjectId
    readonly categoryId: ObjectId
    readonly subCategoryId: ObjectId
    readonly createdBy: ObjectId
    readonly createdAt: Date
    readonly updatedAt: Date
  }

