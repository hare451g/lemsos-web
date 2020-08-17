import styled, { css } from 'styled-components';

const AmountPanel = styled.div(
  ({ theme: { colors } }) => css`
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 1rem 1.25rem;
    margin: 1rem 0;

    border-radius: 4px;

    background-color: ${colors.lightGray7};
  `
);

export default AmountPanel;
