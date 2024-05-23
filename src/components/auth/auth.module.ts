import { Module } from '@nestjs/common';
import { UserService } from '@components/user/user.service';
import { AuthController } from './auth.controller';
import * as UserSchema from '@models/schema/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import constants from '@config/constants';

@Module({
  imports: [MongooseModule.forFeature([{  name: constants.MODELS.USERS, schema: UserSchema}]),
  ],
  providers: [UserService],
  controllers: [AuthController]
})
export class AuthModule {}
