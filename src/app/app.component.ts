import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PrimeNG} from 'primeng/config';
import {HeaderComponent} from './core/components/sections/header/header.component';
import {CardComponent} from './core/components/card/card.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, CardComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'teledu-front';

  constructor(private primeNg: PrimeNG) {
  }

  ngOnInit(): void {
    this.primeNg.ripple.set(false)
  }
}
