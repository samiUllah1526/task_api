import { IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
    @IsNotEmpty({
        message: "Task title should not be empty"
    })
    readonly title: string;

    @IsNotEmpty({
        message: "Task description should not be empty"
    })
    readonly description: string;
}


// @IsOptional() 