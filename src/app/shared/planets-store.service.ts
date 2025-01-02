import { Injectable } from '@angular/core';
import { IPlanet } from './iplanet';

@Injectable({
  providedIn: 'root',
})
export class PlanetsStoreService {
  selectedPlanet = undefined;
  myJourneyPlanets = undefined;

  countPlanetsToVisit = undefined;

  selectPlanet(planet: IPlanet): void {}

  clearSelectedPlanet(): void {}

  addSelectedPlanetToMyJourney(selectedPerson?: string): void {}

  removePlanetFormMyJourney(planet: IPlanet): void {}
}
