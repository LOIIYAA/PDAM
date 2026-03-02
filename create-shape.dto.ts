import { Type } from "class-transformer";
import { IsNotEmpty, IsNumber, IsString,Min } from "class-validator";

export class CreateShapeDto{
    @IsNotEmpty()
    @IsString()
    name: string;


    @Type(()=>Number)
    @IsNumber()
    @Min(1)
    @IsNotEmpty()
    radius: number;
}