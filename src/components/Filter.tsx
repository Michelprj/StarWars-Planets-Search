import { useContext } from 'react';
import FilterContext from '../context/Filter/FilterContext';

function Filter() {
  const { values, handleChange } = useContext(FilterContext);

  return (
    <label>
      <input
        type="text"
        data-testid="name-filter"
        value={ values.filter }
        onChange={ handleChange }
        name="filter"
      />
    </label>
  );
}

export default Filter;
