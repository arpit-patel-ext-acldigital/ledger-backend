import { Global, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from '@models/schema/user.schema';
import constants from '@config/constants';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{  name: constants.MODELS.USERS, schema: UserSchema}]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
  