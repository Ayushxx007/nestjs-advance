/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class CategoryService {


    private category=['mobile','tablet','laptop'];



    getCategory(){

        return this.category;

    }


}
