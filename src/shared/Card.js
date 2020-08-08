import styled, { css } from 'styled-components';
import { border, flexbox, space, layout } from 'styled-system';

const Card = styled.div(
  ({ theme: { colors, screen, shadows } }) => css`
    background-color: ${colors.white};
    padding: 1rem 1rem;
    box-shadow: ${shadows.small};
    border-radius: 8px;
    transition: box-shadow 0.5s;

    :hover {
      box-shadow: ${shadows.medium};
    }

    ${border}
    ${flexbox}
    ${space}
    ${layout}
  `
);

export default Card;
