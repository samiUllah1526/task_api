import { Controller, Get } from "@nestjs/common";
import { UsersService } from "./users.service";


@Controller('users')
export class UserController {

    constructor(private readonly usersService: UsersService) { }


    @Get()
    async users() {
        return await this.usersService.findAll();
    }

}