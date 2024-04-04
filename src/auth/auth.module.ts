import { Module } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthController } from './auth.controller';
import * as UserSchema from '../user/user.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{  name: 'users', schema: UserSchema}]),
  ],
  providers: [UserService],
  controllers: [AuthController]
})
export class AuthModule {}
