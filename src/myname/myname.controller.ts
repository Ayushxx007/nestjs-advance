/* eslint-disable prettier/prettier */
import { Controller,Post,Body } from '@nestjs/common';
import { UppercasePipe } from 'src/common/pipes/uppercase/uppercase.pipe';

@Controller('myname')
export class MynameController {




    @Post('custom')
    nameFunc(@Body('name',new UppercasePipe()) name:string){

        return `return Value: ${name}`;
        

    }

    @Post('customBody')
    nameFuncx(@Body(new UppercasePipe() ) body:{name:string,age?:string}){

        return `return Value: ${body.name}`;

    }





}
