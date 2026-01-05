import { IsInt, IsString } from 'class-validator';

/* eslint-disable prettier/prettier */
export class dto{

    @IsString()
    name:string;
    @IsInt()
    age:number;

}