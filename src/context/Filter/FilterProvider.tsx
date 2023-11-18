import React, { useState } from 'react';
import FilterContext from './FilterContext';

type FilterProviderType = {
  children: React.ReactNode,
};

function FilterProvider({ children }: FilterProviderType) {
  const [values, setValues] = useState({
    filter: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues((prevState) => (
      {
        ...prevState,
        [event.target.name]: event.target.value,
      }
    ));
  };

  const value = {
    values,
    handleChange,
  };

  return (
    <FilterContext.Provider value={ value }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
