/* eslint-disable prettier/prettier */
import { Controller,Get,Post,Put,Patch,Delete,Body,Param } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {

    constructor(private readonly studentService:StudentService){
        
    }

    @Get()
    getStudents(){

        return this.studentService.getStudents();
        // nestjs

    }

    @Post()
    addStudent(@Body() body:{name:string,age:number}){

        return this.studentService.addStudents(body);


    }

    @Put(":id")
    editStudent(@Param("id") id:string , @Body()  body:{name?:string,age?:number}){

        return this.studentService.editStudent(Number(id),body);

    }

    @Delete(":id")
    deleteStudent(@Param("id") id:string){

        return this.studentService.deleteStudent(Number(id));

    }

    







}
