import { createGlobalStyle } from 'styled-components';
import CovidImg from '../../assets/images/covid.jpg';

const globalStyle = createGlobalStyle`
  * {
    outline: none;
    box-sizing:border-box;
    /*padding: 0;
    margin: 0;*/
  }
  body {
    line-height: normal;
  }
  html, body {
    width: 100vw;
    min-height: 100vh;

    display: flex;
  }
  #root {
    flex: 1;

    display: flex;
    justify-content: center;
    align-items: center;

    height: 100%;
    width: 100%;
    background-image: url(${CovidImg});
    background-size: cover;
    background-position: center center;
  }
  .mb-2 {
    margin-bottom: 16px;
  }
  .pt-2 {
    padding-top: 16px;
  }
  .cursor {
    cursor: pointer;
  }
`;

export default globalStyle;