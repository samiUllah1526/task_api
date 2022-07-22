import { IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class DeleteTaskDto {

    @IsNotEmpty()
    @IsNumber({}, { each: true })
    readonly ids: number[];
}