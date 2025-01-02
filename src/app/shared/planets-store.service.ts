import { Injectable, computed, signal } from '@angular/core';
import { IPlanet } from './iplanet';

@Injectable({
  providedIn: 'root',
})
export class PlanetsStoreService {
  selectedPlanet = signal<IPlanet | null>(null);
  myJourneyPlanets = signal<IPlanet[]>([]);

  countPlanetsToVisit = computed(() => this.myJourneyPlanets().length ?? 0);

  selectPlanet(planet: IPlanet): void {
    this.selectedPlanet.set(planet);
  }

  addSelectedPlanetToMyJourney(selectedPerson?: string): void {
    this.myJourneyPlanets.update((p) => [...p, { ...this.selectedPlanet()!, visitWith: selectedPerson }]);
  }

  removePlanetFormMyJourney(planet: IPlanet): void {
    this.myJourneyPlanets.update((p) => [...p.filter((p) => p.name !== planet.name)]);
  }
}
