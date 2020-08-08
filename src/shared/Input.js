import styled, { css } from 'styled-components';
import { space, layout } from 'styled-system';

const Input = styled.input(
  ({ theme: { colors } }) => css`
    min-height: 24px;

    border: 1px solid ${colors.darkGray};
    border-radius: 4px;

    font-size: 1rem;
    padding: 1rem 0.5rem;

    ${space}
    ${layout}
  `
);

export default Input;
