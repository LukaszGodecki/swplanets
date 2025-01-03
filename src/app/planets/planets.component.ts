import { Component, effect, inject } from '@angular/core';
import { PlanetsMenuComponent } from './planets-menu/planets-menu.component';
import { SelectedPlanetComponent } from './selected-planet/selected-planet.component';
import { PlanetsStore } from '../shared/planets.store';

@Component({
  selector: 'app-planets',
  imports: [PlanetsMenuComponent, SelectedPlanetComponent],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss',
})
export class PlanetsComponent {
  private _planetsStore = inject(PlanetsStore);
  constructor() {
    effect(() => {
      console.log('Selected planet changed', this._planetsStore.selectedPlanet());
    });
  }
}
