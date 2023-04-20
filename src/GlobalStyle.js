import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  ::after,
  ::before {
    box-sizing: inherit;
  }

  body {
    font-family: 'Inter', sans-serif;
    display:flex;
    justify-content: center;
    overflow-x: visible;
    overflow-y: scroll;
    text-align: center;
    background-color: white;
    min-height: 100vh;
    width: 100%;
`;
