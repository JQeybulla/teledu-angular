import { Component, OnInit } from '@angular/core';
import { MegaMenuItem } from 'primeng/api';
import { MegaMenu } from 'primeng/megamenu';
import {Button, ButtonDirective, ButtonIcon, ButtonLabel} from 'primeng/button';
import {WindowMaximizeIcon} from 'primeng/icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [MegaMenu, Button, ButtonDirective, WindowMaximizeIcon, ButtonIcon, ButtonLabel]
})
export class HeaderComponent implements OnInit {
  items: MegaMenuItem[] | undefined;
  name: string = 'Qeybu;;a'

  ngOnInit() {
    this.items = [
      {
        label: 'Proqramlaşdırma',
        icon: 'pi pi-code',
        items: [
          [
            {
              label: 'Proqramlaşdırma dilləri',
              items: [
                { label: 'Python' },
                { label: 'Java' },
                { label: 'JavaScript' },
                { label: 'C#' },
                { label: 'Go' },
              ],
            },
          ],
          [
            {
              label: 'Backend',
              items: [
                { label: 'Django' },
                { label: 'Spring/Java' },
                { label: '.Net' },
              ],
            },
          ],
          [
            {
              label: 'Frontend',
              items: [
                { label: 'HTML/CSS' },
                { label: 'Javascript' },
                { label: 'React' },
                { label: 'Angular' },
                { label: 'Vue' },
              ],
            },
          ]
        ],
      },
      {
        label: 'Abituriyent',
        icon: 'pi pi-graduation-cap',
        items: [
          [
            {
              label: 'Computer',
              items: [
                { label: 'Monitor' },
                { label: 'Mouse' },
                { label: 'Notebook' },
                { label: 'Keyboard' },
                { label: 'Printer' },
                { label: 'Storage' },
              ],
            },
          ],
          [
            {
              label: 'Home Theater',
              items: [{ label: 'Projector' }, { label: 'Speakers' }, { label: 'TVs' }],
            },
          ],
          [
            {
              label: 'Gaming',
              items: [{ label: 'Accessories' }, { label: 'Console' }, { label: 'PC' }, { label: 'Video Games' }],
            },
          ],
          [
            {
              label: 'Appliances',
              items: [
                { label: 'Coffee Machine' },
                { label: 'Fridge' },
                { label: 'Oven' },
                { label: 'Vaccum Cleaner' },
                { label: 'Washing Machine' },
              ],
            },
          ],
        ],
      },
      {
        label: 'Xarici dil',
        icon: 'pi pi-language',
        items: [
          [
            {
              label: 'Football',
              items: [{ label: 'Kits' }, { label: 'Shoes' }, { label: 'Shorts' }, { label: 'Training' }],
            },
          ],
          [
            {
              label: 'Running',
              items: [{ label: 'Accessories' }, { label: 'Shoes' }, { label: 'T-Shirts' }, { label: 'Shorts' }],
            },
          ],
          [
            {
              label: 'Swimming',
              items: [{ label: 'Kickboard' }, { label: 'Nose Clip' }, { label: 'Swimsuits' }, { label: 'Paddles' }],
            },
          ],
          [
            {
              label: 'Tennis',
              items: [{ label: 'Balls' }, { label: 'Rackets' }, { label: 'Shoes' }, { label: 'Training' }],
            },
          ],
        ],
      },
    ];
  }
}
