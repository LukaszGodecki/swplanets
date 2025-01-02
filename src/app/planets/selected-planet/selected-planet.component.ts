import { Component, inject, linkedSignal } from '@angular/core';
import { PlanetsStoreService } from '../../shared/planets-store.service';
import { CommonModule } from '@angular/common';
import { PlanetsApiService } from '../../shared/planets-api.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-selected-planet',
  imports: [CommonModule, FormsModule],
  templateUrl: './selected-planet.component.html',
  styleUrl: './selected-planet.component.scss',
})
export class SelectedPlanetComponent {
  readonly planetsStoreService = inject(PlanetsStoreService);
  readonly planetsApiService = inject(PlanetsApiService);

  selectedPerson = linkedSignal({
    source: this.planetsStoreService.selectedPlanet,
    computation: () => undefined,
  });

  addSelectedPlanetToMyJourney(): void {
    this.planetsStoreService.addSelectedPlanetToMyJourney(this.selectedPerson());
  }
}
