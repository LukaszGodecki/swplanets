import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PlanetsApiService {
  private _http = inject(HttpClient);

  searchName = undefined;

  private _getPlanets = undefined;
  planets = undefined;
  isLoadingPlanets = undefined;

  people = undefined;
}
