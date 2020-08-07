import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle(
  ({ theme: { screen } }) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
        Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    * {
      box-sizing: border-box;
    }

    :root {
      font-size: 12px;
    }

    @media only screen and (min-width: ${screen.tablet.frame}px) {
      :root {
        font-size: 16px;
      }
    }
  `
);

export default GlobalStyles;
