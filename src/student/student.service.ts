/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {


    private students=[
        {
            id:1,
            name:"ayush",
            age:27

        }, {
            id:2,
            name:"priya",
            age:24

        },
         {
            id:3,
            name:"siddhi",
            age:29

        }

    ];

    getStudents(){

        return this.students;

    }

    addStudents(body:{name:string,age:number}){

        const newStudent={
            ...body,id:this.students.length+1
        }
        this.students.push(newStudent);

        return newStudent;


    }

    editStudent(id:number,body:{name?:string,age?:number}){

        const student=this.students.find((ele)=>{return ele.id===id});

        if(!student){
            throw new Error("student does not exist")
        }



        if(body.name){

            const name =body.name;
            student.name=name;



        }
          if(body.age){

            const age =body.age;
             student.age=age;

        }

        return student;


    }


    deleteStudent(id:number){

        const deleteStudentIndex=this.students.findIndex((ele)=>{return ele.id===id});
       if (deleteStudentIndex === -1) {
    throw new Error('Student does not exist');
  }

    const deletedStudent = this.students.splice(deleteStudentIndex, 1);

  return deletedStudent[0];

        







        



        



    }







    
}
