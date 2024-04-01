import { Controller, Get } from '@nestjs/common';
import { UserService } from 'src/user/user.service';
@Controller('auth')
export class AuthController {

    constructor(private userService : UserService) {}
    @Get('/ping')
    ping(): any {
        return 'Ping Success'
    }
    
    @Get('/user-list')
    async get() : Promise<any> {
        console.log('in herer');
        return  await this.userService.getAll()
    }
}
