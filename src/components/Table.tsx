import { useContext, useEffect } from 'react';
import fetchApi from '../helpers/fetchApi';
import TableContext from '../context/TableContext';
import { PlanetsType, TableContextType } from '../types';

function Table() {
  const { getValues, fetchPlanets } = useContext<TableContextType>(TableContext);

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

  console.log(fetchPlanets);

  return (
    <table>
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
          <th>Films</th>
          <th>Created</th>
          <th>Edited</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {
          fetchPlanets.map((planet: PlanetsType) => (
            <tr key={ planet.url }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
              <td>{planet.url}</td>
            </tr>
          ))
        }
      </tbody>
    </table>

  );
}

export default Table;
