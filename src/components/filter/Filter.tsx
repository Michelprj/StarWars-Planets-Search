import { useContext } from 'react';
import FilterContext from '../../context/Filter/FilterContext';
import FiltersPerformed from '../filtersPerformed/FiltersPerformed';
import { Button, Container, ContainerImgs,
  ContainerLogo, ContainerSelect,
  FilterInputs, Label, LabelRadios, LineWhite, RadioBtn, Select } from './style';

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
    <Container>
      <ContainerLogo>
        <div id="nameStar">
          <img className="nameLogo" src="Vector.svg" alt="ST" id="ST" />
          <img className="nameLogo" src="Vector (5).svg" alt="A" id="A" />
          <img className="nameLogo" src="Vector (3).svg" alt="R" id="R" />
        </div>
        <div id="nameWars">
          <img className="nameLogo" src="Vector (1).svg" alt="W" id="W" />
          <img className="nameLogo" src="Vector (2).svg" alt="A" id="AW" />
          <img className="nameLogo" src="Vector (4).svg" alt="RS" id="RS" />
        </div>
      </ContainerLogo>

      <ContainerImgs>
        <img src="Ellipse 1.svg" alt="circleOutside" id="circleOutside" />
        <img src="Ellipse 2.svg" alt="circleInside" id="circleInside" />
        <div id="lineWhite" />
      </ContainerImgs>

      <FilterInputs>
        <label id="searchName">
          <input
            type="text"
            data-testid="name-filter"
            value={ filter }
            onChange={ handleChange }
            name="filter"
          />
          <img src="search_.svg" alt="search" id="search" />
        </label>

        <div id="filters">

          <ContainerSelect>
            <Label htmlFor="columnFilter">Coluna</Label>
            <Select
              name="columnFilter"
              data-testid="column-filter"
              id="columnFilter"
              onChange={ handleChange }
              value={ columnFilter }
            >
              {
          columns.map((columnValue) => (
            <option key={ columnValue } value={ columnValue }>{columnValue}</option>
          ))
        }
            </Select>
          </ContainerSelect>

          <ContainerSelect>
            <Label htmlFor="comparisonFilter">Operador</Label>
            <Select
              name="comparisonFilter"
              id="comparisonFilter"
              data-testid="comparison-filter"
              onChange={ handleChange }
              value={ comparisonFilter }
            >
              {
          comparisons.map((comparison) => (
            <option key={ comparison } value={ comparison }>{comparison}</option>
          ))
        }
            </Select>
          </ContainerSelect>

          <input
            type="number"
            name="valueFilter"
            id="searchNumber"
            data-testid="value-filter"
            onChange={ handleChange }
            value={ valueFilter }
          />

          <Button
            data-testid="B-filter"
            onClick={ handleClick }
          >
            Filtrar
          </Button>

          <ContainerSelect>
            <Label htmlFor="column">Ordenar</Label>
            <Select
              name="column"
              data-testid="column-sort"
              id="column"
              onChange={ handleChangeSort }
              value={ column }
            >
              {
          columnsSort.map((columnSort) => (
            <option key={ columnSort } value={ columnSort }>{columnSort}</option>
          ))
        }
            </Select>
          </ContainerSelect>

          <div>
            <LabelRadios>
              <RadioBtn
                type="radio"
                name="sort"
                id="asc"
                data-testid="column-sort-input-asc"
                value="ASC"
                onChange={ handleChangeSort }
              />
              {' '}
              Ascendente
            </LabelRadios>

            <LabelRadios>
              <RadioBtn
                data-testid="column-sort-input-desc"
                type="radio"
                name="sort"
                id="desc"
                value="DESC"
                onChange={ handleChangeSort }
              />
              {' '}
              Descendente
            </LabelRadios>
          </div>

          <Button
            data-testid="column-sort-button"
            onClick={ handleClickOrder }
          >
            Ordenar
          </Button>
        </div>

      </FilterInputs>

      {
        filteredValues.length > 0
        && <FiltersPerformed />
      }

    </Container>
  );
}

export default Filter;
