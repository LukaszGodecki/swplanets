import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanetsStore } from '../shared/planets.store';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly planetsStore = inject(PlanetsStore);
}
