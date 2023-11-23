import { useContext } from 'react';
import FilterContext from '../context/Filter/FilterContext';
import FiltersPerformed from './FiltersPerformed';

function Filter() {
  const { values: { columnFilter,
    comparisonFilter,
    filter,
    valueFilter },
  handleChange,
  handleClick,
  columns,
  comparisons,
  filteredValues,
  columnsSort,
  handleChangeSort,
  handleClickOrder,
  updateColumn: { order: { column } } } = useContext(FilterContext);

  return (
    <>
      <label>
        <input
          type="text"
          data-testid="name-filter"
          value={ filter }
          onChange={ handleChange }
          name="filter"
        />
      </label>

      <select
        name="columnFilter"
        data-testid="column-filter"
        onChange={ handleChange }
        value={ columnFilter }
      >
        {
          columns.map((columnValue) => (
            <option key={ columnValue } value={ columnValue }>{columnValue}</option>
          ))
        }
      </select>

      <select
        name="comparisonFilter"
        data-testid="comparison-filter"
        onChange={ handleChange }
        value={ comparisonFilter }
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
        value={ valueFilter }
      />

      <button
        data-testid="button-filter"
        onClick={ handleClick }
      >
        Filtrar

      </button>

      <select
        name="column"
        data-testid="column-sort"
        onChange={ handleChangeSort }
        value={ column }
      >
        {
          columnsSort.map((columnSort) => (
            <option key={ columnSort } value={ columnSort }>{columnSort}</option>
          ))
        }
      </select>

      <label>
        <input
          type="radio"
          name="sort"
          data-testid="column-sort-input-asc"
          value="ASC"
          onChange={ handleChangeSort }
        />
        {' '}
        Ascendente
      </label>

      <label>
        <input
          data-testid="column-sort-input-desc"
          type="radio"
          name="sort"
          value="DESC"
          onChange={ handleChangeSort }
        />
        {' '}
        Descendente
      </label>

      <button
        data-testid="column-sort-button"
        onClick={ handleClickOrder }
      >
        Ordenar

      </button>

      {
        filteredValues.length > 0
        && <FiltersPerformed />
      }

    </>
  );
}

export default Filter;
