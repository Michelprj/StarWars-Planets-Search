import React from 'react';
import TableProvider from './Table/TableProvider';
import FilterProvider from './Filter/FilterProvider';

type TotalProviderType = {
  children: React.ReactNode,
};

function TotalProvider({ children }: TotalProviderType) {
  return (
    <TableProvider>
      <FilterProvider>
        {children}
      </FilterProvider>
    </TableProvider>
  );
}

export default TotalProvider;
