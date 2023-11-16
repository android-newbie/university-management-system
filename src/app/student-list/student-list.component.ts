import { Component } from '@angular/core';
import { Student } from 'src/student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
  students: Student[] = this.studentService.getStudents();

  constructor(private studentService: StudentService) {}
}
