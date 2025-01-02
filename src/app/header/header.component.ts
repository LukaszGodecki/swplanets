import { Component, inject } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlanetsStoreService } from '../shared/planets-store.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  readonly planetsStoreService = inject(PlanetsStoreService);
}
