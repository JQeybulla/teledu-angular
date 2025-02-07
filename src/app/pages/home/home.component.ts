import { Component } from '@angular/core';
import {CardComponent} from '../../core/components/card/card.component';
import {Paginator} from 'primeng/paginator';

@Component({
  selector: 'app-home',
  imports: [
    CardComponent,
    Paginator
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
