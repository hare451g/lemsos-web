import styled, { css } from 'styled-components';

const Wrapper = styled.div(
  ({ theme: { colors, screen, shadows } }) => css`
    background-color: ${colors.white};
    padding: 1rem 1rem;

    @media only screen and (min-width: ${screen.tablet.frame}px) {
      box-shadow: ${shadows.small};

      border-radius: 8px;

      margin: auto;
      margin-top: 1rem;
      margin-bottom: 1.75rem;
      padding: 1.5rem 1rem;

      max-width: 720px;
    }

    @media only screen and (min-width: ${screen.desktop.frame}px) {
      max-width: 900px;
    }

    @media only screen and (min-width: ${screen.desktopHD.frame}px) {
      padding: 1.75rem 1.5rem;
      max-width: 1024px;
    }
  `
);

export default Wrapper;
