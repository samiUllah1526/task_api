import { IsNotEmpty, IsNumber } from 'class-validator';
import { Transform, Type } from 'class-transformer';

export class DeleteTaskDto {

    @IsNotEmpty()
    @Transform((value) => value.value.map((item: string | number) => +item))
    readonly ids: number[];
}