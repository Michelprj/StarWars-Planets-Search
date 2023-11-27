import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url('fundo.jpeg');
  background-size: cover;
  background-position: center left;
  color: white;
  font-family: Epilogue;
}

`;