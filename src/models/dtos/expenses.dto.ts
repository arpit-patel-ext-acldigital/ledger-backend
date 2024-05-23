import { IsNumber, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class ExpenseDto {
    readonly _id: string
    @IsString()
    readonly name: string
    @IsNumber()
    readonly amount: number
    
    readonly isAutoSet: boolean
    readonly autoExpenseDate: Date

    readonly fromBank: ObjectId
    readonly subCategoryId: ObjectId
    readonly categoryId: ObjectId
    readonly createdBy: ObjectId
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

