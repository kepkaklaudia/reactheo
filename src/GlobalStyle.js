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
  }

  h1 {
    color: #23272F;
    font-size: 60px;
    font-weight: 600;
    margin: 60px 20px;
  }
`;
