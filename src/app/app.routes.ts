import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/container/home.component')
      .then(m => m.HomeComponent),
  },
  {
    path: 'courses',
    loadComponent: () => import('./pages/courses/container/courses.component')
      .then(m => m.CoursesComponent),
  }
];
