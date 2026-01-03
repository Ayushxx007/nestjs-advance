/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class EmployeeService {

    private category=['mobile','tablet','laptop'];



    getCategory(){

        return this.category;

    }


    
}
