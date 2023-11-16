import { Injectable } from '@angular/core';
import { Student } from 'src/student';
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students:Student[]=[
    {name:'Piyush verma',regNo:'1104',marks:90},
    {name:'Siddharth Ranjan',regNo:'1069',marks:100},
    {name:'Ankit Ranjan',regNo:'1041',marks:100}
  ];

  getStudents():Student[]{
    return this.students;
  }

  
}
