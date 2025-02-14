import {Component, OnInit} from '@angular/core';
import {CardComponent} from '../../../core/components/card/card.component';
import {Paginator} from 'primeng/paginator';
import {HttpClient} from '@angular/common/http';
import {Button} from 'primeng/button';
import {AsyncPipe, NgForOf} from '@angular/common';
import {HomeService} from '../services/home.service';
import {TeachersComponent} from '../components/teachers/teachers.component';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    Paginator,
    Button,
    TeachersComponent,
    RouterLink
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
