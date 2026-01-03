/* eslint-disable prettier/prettier */
import { Controller,Get,Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor(private readonly productService:ProductsService ){

    }



    @Get()
    getProducts(){

       return  this.productService.getProducts();


    }


    @Get(":id")
        getProductById(@Param("id") id:string){

        return this.productService.getProductById(Number(id));



    }








    
}
