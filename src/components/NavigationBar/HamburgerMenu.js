import styled, { css } from 'styled-components';

const HamburgerMenu = styled.div(
  ({ theme: { screen } }) => css`
    display: block;
    cursor: pointer;

    @media only screen and (min-width: ${screen.tablet.frame}) {
      display: none;
    }
  `
);

export default HamburgerMenu;
