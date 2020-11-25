import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  @font-face {
  font-family: 'HelveticaNeue';
  src: local('HelveticaNeue'), url(./assets/fonts/HelveticaNeue.ttf) format('truetype');}

  @font-face {
  font-family: 'HelveticaNeueBold';
  src: local('HelveticaNeueBold'), url(./assets/fonts/HelveticaNeueBD.ttf) format('truetype');}

  body {
    background: #292929;
    overflow-x: hidden;
    font-family: 'HelveticaNeue', Arial, Helvetica, sans-serif;
  }


  button {
    cursor: pointer;
  }

  #root {
    max-width: 375px;
    margin: 0 auto;
  }
`;
