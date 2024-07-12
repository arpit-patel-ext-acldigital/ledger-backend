import { BadRequestException, Body, ConflictException, Controller, Get, Post, Req, Res } from '@nestjs/common';
import { UserDto,loginDto } from '@models/dtos/user.dto';
import { UserService } from '@components/user/user.service';
import {compareSync} from 'bcryptjs'
import { encryptToken } from '@common/utils';

@Controller('auth')
export class AuthController {

    constructor(private userService : UserService) {}
    @Get('/ping')
    ping(): any {
        return { message: 'Ping success'}
    }
    
    @Post('/register')
    async singup(@Body() body: UserDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const { email } = body;
        const userExist = await this.userService.get(email, 'email');
        if (userExist) throw new ConflictException('USER_ALREADY_REGISTERED');
        const newUser : UserDto = await this.userService.create(body);
        delete newUser.password;
        return {
            message: 'SIGNUP_SUCCESS',
            data: newUser
        }
    }

    @Post('/login')
    async login(@Body() body: loginDto, @Req() request: Request, @Res() response: Response): Promise<any> {
        const { email, password } = body;
        const userExist: UserDto = await this.userService.get(email, 'email');
        if (!userExist) throw new BadRequestException('WRONG_CRED');
        if(!compareSync(password, userExist.password)) throw new BadRequestException('WRONG_CRED');
        const token = await encryptToken({_id: userExist._id, email})
        await this.userService.update(userExist._id, {token});
        return {
            message: 'LOGIN_SUCCESS',
            data: {token}
        }

    }
}
