import styled, { css } from 'styled-components';

const Wrapper = styled.div(
  ({ theme: { colors, shadows } }) => css`
    background-color: ${colors.white};
    box-shadow: ${shadows.medium};
    border-radius: 8px;
    margin: 1rem;
    padding: 1.5rem 1rem;
  `
);

export default Wrapper;
