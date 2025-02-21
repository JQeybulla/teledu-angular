import {Component, Input} from '@angular/core';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from 'primeng/tabs';
import {AboutCourseComponent} from '../about-course/about-course.component';
import {AboutTeacherComponent} from '../about-teacher/about-teacher.component';
import {ReviewsComponent} from '../reviews/reviews.component';

@Component({
  selector: 'app-course',
  imports: [
    Tabs,
    TabList,
    Tab,
    TabPanels,
    TabPanel,
    AboutCourseComponent,
    AboutTeacherComponent,
    ReviewsComponent
  ],
  templateUrl: './course.component.html',
  styleUrl: './course.component.scss'
})
export class CourseComponent {
  @Input() id: number = 0;

}
