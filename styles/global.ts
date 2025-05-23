// styles/global.ts
import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Definição das fontes personalizadas */
  @font-face {
    font-family: 'Anticon';
    src: url('/fonts/anticon.woff2') format('woff2'),
         url('/fonts/anticon.woff') format('woff');
    font-weight: normal;
    font-style: normal;
    font-display: swap; /* Melhora o carregamento da fonte */
  }

  /* Outras definições @font-face para Open Sans e Righteous se não usar Google Fonts */
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans-Light.woff2') format('woff2');
    font-weight: 300; /* Light */
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Open Sans';
    src: url('/fonts/OpenSans-SemiBold.woff2') format('woff2');
    font-weight: 600; /* SemiBold */
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Righteous';
    src: url('/fonts/Righteous-Regular.woff2') format('woff2');
    font-weight: 400; /* Regular */
    font-style: normal;
    font-display: swap;
  }

  /* Reset CSS e estilos globais */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body, #__next {
    height: 100%;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.main}; /* Usa a fonte definida no tema */
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.5;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
  }
`;