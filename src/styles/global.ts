import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #F0F0F5;
    -webkit-font-smoothing: antialiased;
  }
  body, input, button, textarea {
    font-family: 'Open Sans', sans-serif;
    font-size: 16px;
  }
  h1, h2, h3, h4, h5, strong {
    font-weight: 500;
  }
  button {
    cursor: pointer
  }

  #root{
    max-width: 960px;
    margin: 0 auto;
    padding: 40px 20px;
  }



`;