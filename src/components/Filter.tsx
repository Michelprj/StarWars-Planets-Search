import { useContext } from 'react';
import FilterContext from '../context/Filter/FilterContext';

function Filter() {
  const { values,
    handleChange,
    handleClick,
    columns,
    comparisons } = useContext(FilterContext);

  return (
    <>
      <label>
        <input
          type="text"
          data-testid="name-filter"
          value={ values.filter }
          onChange={ handleChange }
          name="filter"
        />
      </label>

      <select
        name="columnFilter"
        data-testid="column-filter"
        onChange={ handleChange }
        value={ values.columnFilter }
      >
        {
          columns.map((column) => (
            <option key={ column } value={ column }>{column}</option>
          ))
        }
      </select>

      <select
        name="comparisonFilter"
        data-testid="comparison-filter"
        onChange={ handleChange }
        value={ values.comparisonFilter }
      >
        {
          comparisons.map((comparison) => (
            <option key={ comparison } value={ comparison }>{comparison}</option>
          ))
        }
      </select>

      <input
        type="number"
        name="valueFilter"
        data-testid="value-filter"
        onChange={ handleChange }
        value={ values.valueFilter }
      />

      <button
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>
    </>
  );
}

export default Filter;
