import { Body, Catch, ConflictException, Controller, Delete, Get, HttpException, InternalServerErrorException, Param, Post, Put, Req, Res } from '@nestjs/common';
import { response } from 'express';
import { UserDto } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
    constructor(private userService: UserService) { };

    @Get('/list')
    userList(): any {

    }

    @Get('/details/:id')
    userDetails(@Param() id: string, @Req() request: Request, @Res() response: Response): any {

    }

    @Post('')
    async createUser(@Body() body: UserDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const { email } = body;
        const userExist = await this.userService.get(email, 'email');
        if (userExist) throw new ConflictException('User already Exist');
        const newUser : UserDto = await this.userService.create(body);
        delete newUser.password;
        return {
            message: 'User Created',
            data: newUser
        }
    }

    @Put('/:id')
    updateUser(@Body() body: any, @Req() request: Request, @Res() response: Response): any {

    }

    @Delete('/:id')
    deleteUser(@Param() id: string, @Req() request: Request, @Res() response: Response): any {

    }
}
