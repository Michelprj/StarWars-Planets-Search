import { useContext, useEffect } from 'react';
import fetchApi from '../../helpers/fetchApi';
import TableContext from '../../context/Table/TableContext';
import { FilteredValuesType, PlanetsType, TableContextType } from '../../types';
import FilterContext from '../../context/Filter/FilterContext';
import { LineWhite, TableContainer } from './style';

function Table() {
  const { getValues, fetchPlanets } = useContext<TableContextType>(TableContext);
  const { values,
    filteredValues,
    updateColumn,
    clickOrder,
    setClickOrder } = useContext(FilterContext);

  useEffect(() => {
    const getApi = async () => {
      const { results } = await fetchApi();
      const data = results.map((result: any) => {
        const { residents, ...resulted } = result;
        return resulted;
      });

      getValues(data);
    };
    getApi();
  }, []);

  useEffect(() => {
    setClickOrder(false);
  }, [updateColumn.order.column]);

  const filterNames = (listPlanets: PlanetsType[]) => {
    return listPlanets.filter((allPlanets: PlanetsType) => (
      allPlanets.name.toLowerCase().includes(values.filter.toLowerCase())
    ));
  };

  const filterNumbers = (
    filtersPlanets: FilteredValuesType[],
    listPlanets: PlanetsType[],
  ) => {
    let listFiltered = listPlanets;

    filtersPlanets.forEach(({ valueFilter, comparisonFilter, columnFilter }) => {
      if (comparisonFilter === 'maior que') {
        listFiltered = listFiltered
          .filter((planet: any) => Number(planet[columnFilter])
          > Number(valueFilter));
      }
      if (comparisonFilter === 'menor que') {
        listFiltered = listFiltered
          .filter((planet: any) => Number(planet[columnFilter])
          < Number(valueFilter));
      }
      if (comparisonFilter === 'igual a') {
        listFiltered = listFiltered
          .filter((planet: any) => Number(planet[columnFilter])
          === Number(valueFilter));
      }
    });

    return listFiltered;
  };

  const orderAsc = (planets: PlanetsType[]) => {
    const { order: { column } } = updateColumn;
    return planets
      .sort((a: any, b: any) => {
        if (a[column] === 'unknown') {
          return 1;
        } if (b[column] === 'unknown') {
          return -1;
        }
        return a[column] - b[column];
      });
  };

  const orderDesc = (planets: PlanetsType[]) => {
    const { order: { column } } = updateColumn;
    return planets
      .sort((a: any, b: any) => {
        if (a[column] === 'unknown') {
          return 1;
        } if (b[column] === 'unknown') {
          return -1;
        }
        return b[column] - a[column];
      });
  };

  const orderFilter = (planets: PlanetsType[]) => {
    const { order: { sort } } = updateColumn;
    if (clickOrder && sort === 'ASC') {
      orderAsc(planets);
    }
    if (clickOrder && sort === 'DESC') {
      orderDesc(planets);
    }
    return planets;
  };

  const performsFilters = () => {
    const namesFiltered = filterNames(fetchPlanets);
    const filteredNumber = filterNumbers(filteredValues, namesFiltered);
    return orderFilter(filteredNumber);
  };

  return (
    <>
      <LineWhite />
      <TableContainer>
        <thead>
          <tr>
            <th>Name</th>
            <th>Rotation Period</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface Water</th>
            <th>Population</th>
            <th style={ { padding: '1.5em 10em' } }>Films</th>
          </tr>
        </thead>
        <tbody>
          {
          performsFilters().map((planet: PlanetsType) => (
            <tr key={ planet.url }>
              <td data-testid="planet-name">{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td
                style={ {
                  wordBreak: 'break-all' } }
              >
                {planet.films}

              </td>
            </tr>
          ))
        }
        </tbody>
      </TableContainer>
    </>
  );
}
export default Table;
