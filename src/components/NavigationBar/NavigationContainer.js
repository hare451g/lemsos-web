import styled, { css } from 'styled-components';

const NavigationContainer = styled.nav(
  ({ theme: { colors, shadows, screen } }) => css`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-items: center;
    padding: 4px 8px;
    background-color: ${colors.white};
    box-shadow: ${shadows.small};
    justify-content: space-between;

    @media only screen and (min-width: ${screen.mobile.frame}px) {
      flex: 1;
      display: flex;
      padding: 12px 24px;
    }
  `
);

export default NavigationContainer;
