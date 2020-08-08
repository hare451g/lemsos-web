import { createGlobalStyle, css } from 'styled-components';

const GlobalStyles = createGlobalStyle(
  ({ theme: { screen, colors, typography } }) => css`
    html,
    body {
      padding: 0;
      margin: 0;
      font-family: ${typography.fontFamily.primary} sans-serif;
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
      color: ${colors.darkGray5};
      font-family: ${typography.fontFamily.primary} sans-serif;
    }

    @media only screen and (min-width: ${screen.tablet.frame}px) {
      :root {
        font-size: 16px;
      }
    }
  `
);

export default GlobalStyles;
