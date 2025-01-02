import { Component } from '@angular/core';
import { PlanetsMenuComponent } from './planets-menu/planets-menu.component';
import { SelectedPlanetComponent } from './selected-planet/selected-planet.component';

@Component({
  selector: 'app-planets',
  imports: [PlanetsMenuComponent, SelectedPlanetComponent],
  templateUrl: './planets.component.html',
  styleUrl: './planets.component.scss',
})
export class PlanetsComponent {}
