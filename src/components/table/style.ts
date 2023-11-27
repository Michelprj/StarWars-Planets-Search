import styled from 'styled-components';

export const LineWhite = styled.div`
  border: 1px solid white;
  border-top: none;
  position: absolute;
  right: 0.9em;
  top: 51.8em;
  width: 60em;
  padding: 20em 41.28em;
`;

export const TableContainer = styled.table`
  width: 100px;
  border-collapse: collapse;
  position: absolute;
  top: 55em;
  left: 3em;
  text-align: center;

  th {
    padding: 1.5em 1em;
    text-align: center;
    background-color: #2E3035;
    border: 1px solid black;
  }

  td {
    padding: 8px;
    text-align: left;
    color: #AEAEAE;
    font-weight: 400;
    font-size: 12px;
  }
`;
