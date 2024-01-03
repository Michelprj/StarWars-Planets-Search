import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-image: url('/background1.jpg');
  background-size: cover;
  color: white;
  font-family: Epilogue;
}

`;