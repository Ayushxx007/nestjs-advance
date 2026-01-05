/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { customer } from './interface/interface';
import { dto } from './dto/create.dto';

@Injectable()
export class CustomerService {

    private customers:customer[]=[];


    getCustomer():customer[]{

      return  this.customers;

    }

    addCustomer(data:dto):customer{

        const newCustomer:customer={id:this.customers.length+1,...data};
        this.customers.push(newCustomer);
        return newCustomer;

    }

    
}
