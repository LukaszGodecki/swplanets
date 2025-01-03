import { CommonModule } from '@angular/common';
import { Component, effect, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PlanetsApiService } from '../../shared/planets-api.service';
import { IPlanet } from '../../shared/iplanet';
import { PlanetsStore } from '../../shared/planets.store';

@Component({
  selector: 'app-planets-menu',
  imports: [CommonModule, FormsModule],
  templateUrl: './planets-menu.component.html',
  styleUrl: './planets-menu.component.scss',
})
export class PlanetsMenuComponent {
  private _planetsApiService = inject(PlanetsApiService);
  private _planetsStore = inject(PlanetsStore);

  planets = this._planetsApiService.planets;
  searchName = this._planetsApiService.searchName;
  isLoadingPlanets = this._planetsApiService.isLoadingPlanets;

  selectPlanet(planet: IPlanet) {
    this._planetsStore.selectPlanet(planet);
  }
}
