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

  columnFilter: string,
  comparisonFilter: string,
  valueFilter: string,
};

export type TableContextType = {
  fetchPlanets: PlanetsType[],
  getValues: (results: PlanetsType[]) => void,
};

export type FilterContextType = {
  values: {
    filter: string,
    columnFilter: string,
    comparisonFilter: string,
    valueFilter: string,
  },
  handleClick: () => void,
  handleChange: (event: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) => void,
  filteredValues: FilteredValuesType[],
  columns: string[],
  comparisons: string[],
  setFilteredValues: React.Dispatch<React.SetStateAction<FilteredValuesType[]>>,
  setColumns: React.Dispatch<React.SetStateAction<string[]>>,
};

export type FilteredValuesType = {
  filter: string,
  columnFilter: string,
  comparisonFilter: string,
  valueFilter: string,
};
