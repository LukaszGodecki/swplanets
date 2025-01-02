export interface IPlanet {
  name: string;
  diameter: number;
  rotation_period: number;
  orbital_period: number;
  gravity: number;
  population: number;
  climate: string;
  terrain: string;
  surface_water: number;
  residents: [];
  films: [];
  url: string;
  created: Date;
  edited: Date;

  visitWith?: string;
}
