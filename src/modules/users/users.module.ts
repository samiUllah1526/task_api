import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { usersProviders } from './users.providers';
import { UserController } from './users.controller';

@Module({
    controllers: [UserController],
    providers: [UsersService, ...usersProviders],
    exports: [UsersService],
})
export class UsersModule { }
