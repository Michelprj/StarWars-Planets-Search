export type PlanetsType = {
  climate: string,
  created: string,
  diameter: string,
  edited: string,
  films: string[],
  gravity: string,
  name: string,
  orbital_period: string,
  population: string,
  rotation_period: string,
  surface_water: string,
  terrain: string,
  url: string,
};

export type TableContextType = {
  fetchPlanets: PlanetsType[],
  getValues: (results: PlanetsType[]) => void,
};
