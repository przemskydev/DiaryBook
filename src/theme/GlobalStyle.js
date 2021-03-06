import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  
  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  html {
    /* happy rems */
    /* 1rem == 10px */
    font-size: 62.5%; 
  }
  
  body {
    margin: 0;
    padding: 0;
    padding-left: 150px;
    font-size: 1.6rem;
    font-family: "Montserrat", sans-serif;
  }

  button:focus {
    outline:0;
  }

  input:focus {
    outline:0;
  }
`;

export default GlobalStyle;
