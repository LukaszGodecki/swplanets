import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IPlanet } from '../shared/iplanet';
import { PlanetsStore } from '../shared/planets.store';

@Component({
  selector: 'app-my-journey',
  imports: [CommonModule],
  templateUrl: './my-journey.component.html',
  styleUrl: './my-journey.component.scss',
})
export class MyJourneyComponent {
  readonly planetsStore = inject(PlanetsStore);

  removeFromMyJourney(planet: IPlanet): void {
    this.planetsStore.removePlanetFormMyJourney(planet);
  }
}
