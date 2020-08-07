import styled, { css } from 'styled-components';

const NavigationList = styled.ul(
  ({ theme: { screen } }) => css`
    display: none;

    @media only screen and (min-width: ${screen.tablet.frame}px) {
      display: flex;
      list-style-type: none;
      padding: 12px 24px;
      align-self: flex-end;
    }
  `
);

export default NavigationList;
