import { useContext } from 'react';
import FilterContext from '../context/Filter/FilterContext';
import { FilteredValuesType } from '../types';

function FiltersPerformed() {
  const { filteredValues, setFilteredValues, setColumns } = useContext(FilterContext);

  const handleClick = (column: FilteredValuesType) => {
    const removeFilter = filteredValues
      .filter((filter) => filter.columnFilter !== column.columnFilter);

    setFilteredValues(removeFilter);
    setColumns((prevState) => [...prevState, column.columnFilter]);
  };

  const removedAll = () => {
    const column = filteredValues.map((filter) => filter.columnFilter);
    setFilteredValues([]);
    setColumns(column);
  };

  return (
    <>
      {
      filteredValues.map((filter, index) => (
        <div key={ index }>
          <p data-testid="filter">
            {`${filter.columnFilter} 
          ${filter.comparisonFilter} ${filter.valueFilter} `}
            <button onClick={ () => handleClick(filter) }>X</button>
          </p>
        </div>
      ))
    }

      <button
        data-testid="button-remove-filters"
        onClick={ removedAll }
      >
        Remover todas filtragens

      </button>
    </>
  );
}

export default FiltersPerformed;
