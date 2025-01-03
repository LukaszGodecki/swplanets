import { patchState, signalStore, withComputed, withMethods, withState } from '@ngrx/signals';
import { IPlanet } from './iplanet';
import { computed } from '@angular/core';

type PlanetsState = {
  selectedPlanet: IPlanet | null;
  myJourneyPlanets: IPlanet[];
};

const initialState: PlanetsState = {
  selectedPlanet: null,
  myJourneyPlanets: [],
};

export const PlanetsStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ myJourneyPlanets }) => ({
    countPlanetsToVisit: computed(() => myJourneyPlanets()?.length ?? 0),
  })),
  withMethods((store) => ({
    selectPlanet(planet: IPlanet): void {
      patchState(store, (state) => ({ selectedPlanet: { ...planet } }));
    },
    addSelectedPlanetToMyJourney(selectedPerson?: string): void {
      patchState(store, (state) => ({
        myJourneyPlanets: [...state.myJourneyPlanets, { ...state.selectedPlanet!, visitWith: selectedPerson }],
      }));
    },
    removePlanetFormMyJourney(planet: IPlanet): void {
      patchState(store, (state) => ({
        myJourneyPlanets: [...state.myJourneyPlanets.filter((p) => p.name !== planet.name)],
      }));
    },
  })),
);
