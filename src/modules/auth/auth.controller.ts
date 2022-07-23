import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { Request as ExpRequest } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }


    @UseGuards(AuthGuard('localStrategy'))
    @Post('login')
    async login(@Request() req: ExpRequest) {
        console.log("login route", req)
        return await this.authService.login(req.user);
    }


    @Post('register')
    async signUp(@Body() user: UserDto) {
        return await this.authService.create(user);
    }
}