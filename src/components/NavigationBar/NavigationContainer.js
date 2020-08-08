import styled, { css } from 'styled-components';

const NavigationContainer = styled.nav(
  ({ theme: { colors, shadows, screen } }) => css`
    position: fixed;
    z-index: 1;

    display: flex;

    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 4px 8px;
    background-color: ${colors.white};
    box-shadow: ${shadows.small};
    justify-content: space-between;

    padding: 8px 16px;

    @media only screen and (min-width: ${screen.tablet.frame}px) {
      flex: 1;
      display: flex;
      padding: 0px 24px;
    }
  `
);

export default NavigationContainer;
