
/* eslint-disable prettier/prettier */
import { Controller,Body,Get,Post } from '@nestjs/common';
import { CustomerService } from './customer.service';
import { dto } from './dto/create.dto';
import { customer } from './interface/interface';

@Controller('customer')
export class CustomerController {


    constructor(private readonly customerService:CustomerService){}



@Get()
    getCustomer():customer[]{

        return this.customerService.getCustomer();

    
    }


    @Post()
    addCustomer(@Body() data:dto){

        return this.customerService.addCustomer(data);

    }


    




    
}
