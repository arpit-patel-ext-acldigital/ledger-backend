import { IsEmail, IsOptional, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class BanksDto {
    readonly _id: ObjectId
    @IsString()
    readonly name: string
    readonly createdBy: ObjectId
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }

export class CreateBankDto {
  readonly _id: ObjectId
  @IsOptional()
  readonly name: string
}

export class UpdateBankDto {
  @IsOptional()
  readonly name: string
  @IsOptional()
  readonly isActive: boolean
}

