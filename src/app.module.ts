import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';
import { AuthController } from './auth/auth.controller';
import Router from './router';
import { RouterModule } from '@nestjs/core';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost:27017/ledger-analysis'), RouterModule.register(Router)],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, UserService],
})
export class AppModule {}
