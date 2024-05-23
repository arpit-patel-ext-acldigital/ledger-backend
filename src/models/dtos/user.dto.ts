import { IsEmail, IsString } from "class-validator"

export class UserDto {
    readonly _id: string
    
    @IsString()
    readonly firstName: string
    
    @IsString()
    readonly lastName: string
  
    @IsEmail()
    readonly email: string
    
    @IsString()
    password: string
    
    readonly token: string
    readonly createdAt: Date
    readonly updatedAt: Date
  }
  

export class loginDto {
    @IsString()
    readonly email: string

    @IsString()
    readonly password: string
    
}