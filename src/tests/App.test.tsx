import { screen } from '@testing-library/react';
import App from '../App';
import { renderTesting } from '../utils/renderTesting';

describe('Testa aplicação Starwars planets search TS.', () => {
  it('Verificar se os elementos estão na tela.', async () => {
    const {user} = renderTesting(<App />);
    
    const inputName = screen.getByTestId('name-filter');
    expect(inputName).toBeInTheDocument();

    const selectFilter = screen.getByTestId('column-filter');
    expect(selectFilter).toBeInTheDocument();
    
    const selectComparison = screen.getByTestId('comparison-filter');
    expect(selectComparison).toBeInTheDocument();

    const inputNumbers = screen.getByTestId('value-filter');
    expect(inputNumbers).toBeInTheDocument();

    const btnFilter = screen.getByRole('button', { name: /filtrar/i });
    expect(btnFilter).toBeInTheDocument();

    const tableName = screen.getByRole('columnheader', { name: /name/i });
    expect(tableName).toBeInTheDocument();

    const tableRotation = screen.getByRole('columnheader', { name: /rotation period/i });
    expect(tableRotation).toBeInTheDocument();

    const tableOrbital = screen.getByRole('columnheader', { name: /orbital period/i });
    expect(tableOrbital).toBeInTheDocument();

    const tableDiameter = screen.getByRole('columnheader', { name: /diameter/i });
    expect(tableDiameter).toBeInTheDocument();

    const tableClimate = screen.getByRole('columnheader', { name: /climate/i });
    expect(tableClimate).toBeInTheDocument();

    const  tableGravity = screen.getByRole('columnheader', { name: /gravity/i });
    expect(tableGravity).toBeInTheDocument();

    const tableTerrain = screen.getByRole('columnheader', { name: /terrain/i });
    expect(tableTerrain).toBeInTheDocument();

    const tableSurface = screen.getByRole('columnheader', { name: /surface water/i });
    expect(tableSurface).toBeInTheDocument();

    const tablePopulation = screen.getByRole('columnheader', { name: /population/i });
    expect(tablePopulation).toBeInTheDocument();

    const tableFilms = screen.getByRole('columnheader', { name: /films/i });
    expect(tableFilms).toBeInTheDocument();

    const tableCreated = screen.getByRole('columnheader', { name: /created/i });
    expect(tableCreated).toBeInTheDocument();

    const tableEdited = screen.getByRole('columnheader', { name: /edited/i });
    expect(tableEdited).toBeInTheDocument();

    const tableUrl = screen.getByRole('columnheader', { name: /url/i });
    expect(tableUrl).toBeInTheDocument();
  });

  // it('Testa se o FilterPerformed é renderizado corretamente.', async () => {
  //   const {user} = renderTesting(<App />);

  //   const selectFilter = screen.getByTestId('column-filter');
  //   expect(selectFilter).toBeInTheDocument();
    
  //   const selectComparison = screen.getByTestId('comparison-filter');
  //   expect(selectComparison).toBeInTheDocument();

  //   const inputNumbers = screen.getByTestId('value-filter');
  //   expect(inputNumbers).toBeInTheDocument();

  //   const btnFilter = screen.getByRole('button', { name: /filtrar/i });
  //   expect(btnFilter).toBeInTheDocument();

  //   await user.selectOptions()

  // })
})

