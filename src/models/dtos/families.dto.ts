import { IsNumber, IsString } from "class-validator"
import { ObjectId } from "mongoose"

export class FamiliesDto {
    readonly _id: string
    @IsString()
    readonly name: string
    readonly admin: ObjectId
    readonly members: [ObjectId]
    readonly requests: [ObjectId]
    
    readonly createdBy: ObjectId
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

