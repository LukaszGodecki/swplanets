import { Injectable, computed, signal } from '@angular/core';
import { IPlanet } from './iplanet';

@Injectable({
  providedIn: 'root',
})
export class PlanetsStoreService {
  selectedPlanet = signal<IPlanet | null>(null);
  myJourneyPlanets = undefined;

  countPlanetsToVisit = undefined;

  selectPlanet(planet: IPlanet): void {
    this.selectedPlanet.set(planet);
  }

  addSelectedPlanetToMyJourney(selectedPerson?: string): void {}

  removePlanetFormMyJourney(planet: IPlanet): void {}
}
