import styled from 'styled-components';

export const TableContainer = styled.div`
  text-align: center;
  overflow: auto;
  position: absolute;
  top: 45em;
  width: 100vw;
  display: flex;
  justify-content: center;

  
  table {
    border-collapse: collapse;
    width: 80vw;
  }

  th {
    padding: 1.5vw 1vw;
    font-size: 1vw;
    text-align: center;
    background-color: #2E3035;
    border: 1px solid black;
  }

  td {
    padding: 1vw;
    text-align: left;
    color: #AEAEAE;
    font-weight: 400;
    font-size: 1vw;
  }
`;
