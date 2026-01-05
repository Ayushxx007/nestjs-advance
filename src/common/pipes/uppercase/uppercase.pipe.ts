/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class UppercasePipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {

    if(typeof value==='string'){
      return value.toUpperCase();
    }
    if(typeof value==="object" && value!=null ){

      value.name=value?.name?.toUpperCase();
      return value;

    }

    
    return value;
  }
}
