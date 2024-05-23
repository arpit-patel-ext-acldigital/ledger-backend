import { IsNumber, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class ExpenseHistoryDto {
    readonly _id: string
    @IsString()
    readonly name: string
    @IsNumber()
    readonly amount: number
    
    readonly fromBank: ObjectId
    readonly subCategoryId: ObjectId
    readonly categoryId: ObjectId
    readonly createdBy: ObjectId
    readonly familyId: ObjectId
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

