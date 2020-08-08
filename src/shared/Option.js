import styled, { css } from 'styled-components';

const Option = styled.option(
  ({ theme: { colors } }) => css`
    min-height: 24px;

    font-size: 1rem;
    padding: 0.85rem 0.5rem;
  `
);

export default Option;
