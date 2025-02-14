import { Component } from '@angular/core';
import {Card} from 'primeng/card';
import {Button, ButtonDirective, ButtonLabel} from 'primeng/button';
import {Rating} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {AnimateOnScroll} from 'primeng/animateonscroll';
import {Ripple} from 'primeng/ripple';

@Component({
  selector: 'app-card',
  imports: [
    Card,
    Button,
    Rating,
    FormsModule,
    ButtonDirective,
    Ripple,
    ButtonLabel,
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  rating: number = 3.1;
}
