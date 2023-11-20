import { useContext } from 'react';
import FilterContext from '../context/Filter/FilterContext';

function Filter() {
  const { values, handleChange, handleClick } = useContext(FilterContext);

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
        <option value="population">population</option>
        <option value="orbital_period">orbital_period</option>
        <option value="diameter">diameter</option>
        <option value="rotation_period">rotation_period</option>
        <option value="surface_water">surface_water</option>
      </select>

      <select
        name="comparisonFilter"
        data-testid="comparison-filter"
        onChange={ handleChange }
        value={ values.comparisonFilter }
      >
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
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
