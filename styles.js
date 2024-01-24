import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }

  html,
  body {
    margin: 0px;
    height: 100%;
  }

  a {
    text-decoration: none;
  }
`;
