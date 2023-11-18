import React, { useState } from 'react';
import TableContext from './TableContext';
import { PlanetsType } from '../../types';

type TableProviderType = {
  children: React.ReactNode,
};

function TableProvider({ children }: TableProviderType) {
  const [fetchPlanets, setFetchPlanets] = useState([] as PlanetsType[]);

  const getValues = (results: PlanetsType[]) => {
    setFetchPlanets(results);
  };

  const value = {
    fetchPlanets,
    getValues,
  };

  return (
    <TableContext.Provider value={ value }>
      {children}
    </TableContext.Provider>
  );
}

export default TableProvider;
