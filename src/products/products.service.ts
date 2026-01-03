/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {


    private products=[
        {
            id:1,
            name:"mobile",
            price:555555

        },
          {
            id:2,
            name:"laptop",
            price:5553444

        },
          {
            id:3,
            name:"watch",
            price:556464

        },

    ]


    getProducts(){
        return this.products;
 
    }

    getProductById(id:number){

        const specificProduct=this.products.find((pro)=>{ return pro.id===id});

        return specificProduct;

    }


}
