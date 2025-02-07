import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {Button} from 'primeng/button';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {AnimateOnScroll} from 'primeng/animateonscroll';

@Component({
  selector: 'app-card',
  imports: [
    Card,
    Button,
    Rating,
    FormsModule,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  rating: number = 3.1;
}
