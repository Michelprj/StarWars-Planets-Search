import React, { useState } from 'react';
import FilterContext from './FilterContext';
import { FilteredValuesType } from '../../types';

type FilterProviderType = {
  children: React.ReactNode,
};

const INITIAL_STATE = {
  filter: '',
  columnFilter: 'population',
  comparisonFilter: 'maior que',
  valueFilter: '0',
};

const valuesColumns = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const comparisons = ['maior que', 'menor que', 'igual a'];

function FilterProvider({ children }: FilterProviderType) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [filteredValues, setFilteredValues] = useState<FilteredValuesType[]>([]);
  const [columns, setColumns] = useState(valuesColumns);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) => {
    setValues((prevState) => (
      {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    ));
  };

  const handleClick = () => {
    const removeColumns = columns.filter((column) => column !== values.columnFilter);
    setFilteredValues([...filteredValues, values]);
    setColumns(removeColumns);
    setValues({
      ...values,
      columnFilter: columns[1],
    });
  };

  const value = {
    values,
    handleChange,
    handleClick,
    filteredValues,
    columns,
    comparisons,
    setFilteredValues,
    setColumns,
  };

  return (
    <FilterContext.Provider value={ value }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
