import styled, { css } from 'styled-components';

const Select = styled.select(
  ({ theme: { colors } }) => css`
    min-height: 24px;

    border: 1px solid ${colors.darkGray};
    border-radius: 4px;

    font-size: 1rem;
    padding: 0.85rem 0.5rem;
  `
);

export default Select;
