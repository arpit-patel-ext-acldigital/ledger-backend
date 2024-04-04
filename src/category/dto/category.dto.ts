import { IsEmail, IsString } from "class-validator"

export class CategoryDto {
    readonly _id: string
    @IsString()
    readonly name: string

    readonly createdBy: object
    readonly isActive: boolean
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

