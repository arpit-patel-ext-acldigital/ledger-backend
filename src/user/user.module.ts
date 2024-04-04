import { Global, Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { MongooseModule } from '@nestjs/mongoose';
import {UserSchema} from './user.schema';

@Global()
@Module({
  imports: [MongooseModule.forFeature([{  name: 'users', schema: UserSchema}]),
  ],
  providers: [UserService],
  controllers: [UserController]
})
export class UserModule {}
  