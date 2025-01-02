import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject, signal } from '@angular/core';
import { rxResource, toSignal } from '@angular/core/rxjs-interop';
import { IPlanetResponse } from './iplanet-response';
import { map } from 'rxjs';
import { IPlanet } from './iplanet';

@Injectable({
  providedIn: 'root',
})
export class PlanetsApiService {
  private _http = inject(HttpClient);

  searchName = signal<string>('');

  private _getPlanets = rxResource({
    request: () => ({
      searchName: this.searchName(),
    }),
    loader: ({ request }) =>
      this._http
        .get<IPlanetResponse>(`https://swapi.py4e.com/api/planets/?search=${request.searchName}`)
        .pipe(map((next) => next.results)),
  });
  planets = computed(() => this._getPlanets.value() ?? ([] as IPlanet[]));
  isLoadingPlanets = computed(() => this._getPlanets.isLoading());

  people = toSignal<string[]>(
    this._http.get<any>(`https://swapi.py4e.com/api/people/`).pipe(map((next) => next.results.map((p: any) => p.name))),
  );
}
