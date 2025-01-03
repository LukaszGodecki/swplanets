import { Component, inject, linkedSignal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanetsApiService } from '../../shared/planets-api.service';
import { FormsModule } from '@angular/forms';
import { PlanetsStore } from '../../shared/planets.store';

@Component({
  selector: 'app-selected-planet',
  imports: [CommonModule, FormsModule],
  templateUrl: './selected-planet.component.html',
  styleUrl: './selected-planet.component.scss',
})
export class SelectedPlanetComponent {
  readonly planetsStore = inject(PlanetsStore);
  readonly planetsApiService = inject(PlanetsApiService);

  selectedPerson = linkedSignal({
    source: this.planetsStore.selectedPlanet,
    computation: () => undefined,
  });

  addSelectedPlanetToMyJourney(): void {
    this.planetsStore.addSelectedPlanetToMyJourney(this.selectedPerson());
  }
}
