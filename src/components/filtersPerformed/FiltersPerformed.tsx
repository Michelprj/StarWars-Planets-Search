import { useContext } from 'react';
import FilterContext from '../../context/Filter/FilterContext';
import { FilteredValuesType } from '../../types';
import { Container } from './style';
import { Button } from '../filter/style';

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
    <Container>
      {
      filteredValues.map((filter, index) => (
        <div key={ index }>
          <p data-testid="filter">
            {`${filter.columnFilter} 
          ${filter.comparisonFilter} ${filter.valueFilter} `}
            <button onClick={ () => handleClick(filter) }>
              X
            </button>
          </p>
        </div>
      ))
    }

      <Button
        data-testid="button-remove-filters"
        onClick={ removedAll }
      >
        Remover todas filtragens

      </Button>
    </Container>
  );
}

export default FiltersPerformed;
