import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    color: hsl(0, 0%, 100%)
  }

  * {
      box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    min-height: 100%;
    background-color: hsl(222, 10%, 20%);
  }
`;
