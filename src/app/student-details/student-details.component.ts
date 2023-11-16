import { Component } from '@angular/core';
import { Student } from 'src/student';
import { StudentService } from '../student.service';
@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.css']
})
export class StudentDetailsComponent {
  students: Student[] = this.studentService.getStudents();

  constructor(private studentService: StudentService) {}
}
