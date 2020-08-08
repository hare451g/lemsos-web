import styled, { css } from 'styled-components';

const Content = styled.article(
  ({ theme: { colors, typography, shadows } }) => css`
    font-family: ${typography.fontFamily.primary};
    font-size: 1rem;
    font-style: normal;
    font-weight: normal;

    color: ${colors.darkGray5};

    width: inherit;
    hr {
      border-color: ${colors.darkGray3};
    }

    p {
      margin-top: 0.5rem;
      margin-bottom: 1rem;
      line-height: 1.5;
      font-size: 1.15rem;
    }

    h1 {
      font-size: 1.75rem;
    }

    h2 {
      padding-top: 1.5rem;
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }

    h3 {
      font-size: 1.45rem;
      margin-bottom: 0.5rem;
    }

    h4 {
      font-size: 1.35rem;
    }

    h5 {
      font-size: 1.25rem;
    }

    h6 {
      font-size: 1.15rem;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-family: ${typography.fontFamily.primary};
      margin-top: 1.25rem;
    }

    a {
      text-decoration-color: ${colors.indigo};
    }

    * > img {
      border-radius: 8px;
      box-shadow: ${shadows.large};
      width: 100%;
    }

    li {
      margin-bottom: 0.5em;
      font-size: 1.15rem;
    }

    pre {
      overflow-x: auto;
      cursor: text;
      border-radius: 0.85rem;
      padding: 1rem;
      box-shadow: ${shadows.large};
    }
  `
);

export default Content;
