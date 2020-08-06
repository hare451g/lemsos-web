import styled, { css } from 'styled-components';

const NavigationContainer = styled.nav(
  ({ theme: { colors, shadows } }) => css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 16px;
    background-color: ${colors.white};
    box-shadow: ${shadows.small};
  `
);

export default NavigationContainer;
