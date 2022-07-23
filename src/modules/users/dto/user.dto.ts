// import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsEmail, IsOptional, IsEmpty } from "class-validator";



export class UserDto {

    // @IsString({
    //     message: "Please provide the name"
    // })
    @IsOptional()
    readonly name: string;



    @IsEmail({}, { message: '"Please provide a valid email!' })
    readonly email: string;


    @IsString({ message: 'Please provide a password!' })
    // @IsEmpty({ message: 'Please provide a password' })
    readonly password: string;


    // @IsString({ message: 'Please provide the gender' })
    @IsOptional()
    readonly gender: string;
}