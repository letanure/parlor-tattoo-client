import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  /* noto-sans-regular - latin */
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local(''), url('/fonts/noto-sans-v21-latin-regular.woff2') format('woff2');
  }
  /* noto-sans-700 - latin */
  @font-face {
    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: local(''), url('/fonts/noto-sans-v21-latin-700.woff2') format('woff2');
  }
  * {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }
    body {
      font-family: ${theme.font.family.body.name};
    }
  `}
`

export default GlobalStyles
