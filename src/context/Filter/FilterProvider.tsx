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

function FilterProvider({ children }: FilterProviderType) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [filteredValues, setFilteredValues] = useState<FilteredValuesType[]>([]);

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
    setFilteredValues([...filteredValues, values]);
  };

  const value = {
    values,
    handleChange,
    handleClick,
    filteredValues,
  };

  return (
    <FilterContext.Provider value={ value }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
