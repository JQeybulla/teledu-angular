import { Component } from '@angular/core';
import {CurrencyPipe} from '@angular/common';
import {Panel} from 'primeng/panel';

@Component({
  selector: 'app-about-course',
  imports: [
    CurrencyPipe,
    Panel
  ],
  templateUrl: './about-course.component.html',
  styleUrl: './about-course.component.scss'
})
export class AboutCourseComponent {

}
