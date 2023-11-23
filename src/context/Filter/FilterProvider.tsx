import React, { useContext, useState } from 'react';
import FilterContext from './FilterContext';
import { FilteredValuesType, OrderType } from '../../types';
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

// Sort values
const columnsSort = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const ValuesSort = {
  order: { column: 'population', sort: 'ASC' },
};
// ----

const valuesColumns = ['population', 'orbital_period',
  'diameter', 'rotation_period', 'surface_water'];

const comparisons = ['maior que', 'menor que', 'igual a'];

function FilterProvider({ children }: FilterProviderType) {
  const [values, setValues] = useState(INITIAL_STATE);
  const [filteredValues, setFilteredValues] = useState<FilteredValuesType[]>([]);
  const [columns, setColumns] = useState(valuesColumns);
  const [updateColumn, setUpdateColumn] = useState(ValuesSort);
  const [clickOrder, setClickOrder] = useState(false);

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

  const handleChangeSort = (event: React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLSelectElement>) => {
    setUpdateColumn((prevState) => (
      {
        ...prevState,
        order: { ...prevState.order, [event.target.name]: event.target.value },
      }
    ));
  };

  const handleClickOrder = () => {
    setUpdateColumn(updateColumn);
    setClickOrder((prevState) => !prevState);
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
    columnsSort,
    handleChangeSort,
    handleClickOrder,

    updateColumn,
    clickOrder,
    setClickOrder,
  };

  return (
    <FilterContext.Provider value={ value }>
      {children}
    </FilterContext.Provider>
  );
}

export default FilterProvider;
