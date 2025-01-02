import { Component, effect, inject } from '@angular/core';
import { PlanetsMenuComponent } from './planets-menu/planets-menu.component';
import { SelectedPlanetComponent } from './selected-planet/selected-planet.component';
import { PlanetsStoreService } from '../shared/planets-store.service';

@Component({
  selector: 'app-planets',
  imports: [PlanetsMenuComponent, SelectedPlanetComponent],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss',
})
export class PlanetsComponent {
  private _planetsStoreService = inject(PlanetsStoreService);
  constructor() {
    effect(() => {
      console.log('Selected planet changed', this._planetsStoreService.selectedPlanet());
    });
  }
}
