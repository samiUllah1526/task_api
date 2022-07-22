import { Controller, Body, Post, UseGuards, Request } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UserDto } from '../users/dto/user.dto';
import { Request as ExpRequest } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }


    @UseGuards(AuthGuard('local'))
    @Post('register')
    async login(@Request() req: ExpRequest) {
        return await this.authService.login(req.user);
    }


    @Post('login')
    async signUp(@Body() user: UserDto) {
        return await this.authService.create(user);
    }
}