import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'planets',
    loadComponent: () => import('./planets/planets.component').then((c) => c.PlanetsComponent),
  },
  {
    path: 'my-journey',
    loadComponent: () => import('./my-journey/my-journey.component').then((c) => c.MyJourneyComponent),
  },
  { path: '', redirectTo: 'planets', pathMatch: 'full' },
];
