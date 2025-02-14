import { Component } from '@angular/core';
import {TeacherComponent} from '../teacher/teacher.component';

@Component({
  selector: 'app-teachers',
  imports: [
    TeacherComponent
  ],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.scss'
})
export class TeachersComponent {

}
