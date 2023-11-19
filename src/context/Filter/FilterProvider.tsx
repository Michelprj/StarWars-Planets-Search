import React, { useContext, useState } from 'react';
import FilterContext from './FilterContext';
import TableContext from '../Table/TableContext';

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
  const [click, setClick] = useState(false);
  const { fetchPlanets } = useContext(TableContext);

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
    setClick(true);
  };

  const clickFalse = () => {
    setClick(false);
  };

  const value = {
    values,
    handleChange,
    handleClick,
    click,
    clickFalse,
  };

  return (
    <FilterContext.Provider value={ value }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
