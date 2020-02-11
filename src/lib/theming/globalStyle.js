import { createGlobalStyle, withTheme } from 'styled-components'

export const GlobalStyle = withTheme(createGlobalStyle`
  html {
    color: ${({ theme }) => theme.colors.text};
    text-rendering: optimizeLegibility;
  }

  body {
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.body};
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html, body,
  body > div:first-child,
  #__next,
  #__next > div {
    width: 100%;
    height: 100%;
  }

  *, :after, :before {
    box-sizing: border-box;
  }

  
  a:hover {
    cursor:pointer;
  }

  button {
    cursor: pointer;
  }
`)
