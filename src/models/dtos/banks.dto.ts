import { IsEmail, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class BanksDto {
    readonly _id: ObjectId
    readonly name: string

    readonly createdBy: ObjectId
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

