import { Component, inject } from '@angular/core';
import { PlanetsStoreService } from '../shared/planets-store.service';
import { CommonModule } from '@angular/common';
import { IPlanet } from '../shared/iplanet';

@Component({
  selector: 'app-my-journey',
  imports: [CommonModule],
  templateUrl: './my-journey.component.html',
  styleUrl: './my-journey.component.scss',
})
export class MyJourneyComponent {
  readonly planetsStoreService = inject(PlanetsStoreService);

  removeFromMyJourney(planet: IPlanet): void {
    this.planetsStoreService.removePlanetFormMyJourney(planet);
  }
}
