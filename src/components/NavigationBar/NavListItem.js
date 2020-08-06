import styled, { css } from 'styled-components';

const NavListItem = styled.li(
  ({ theme: { typography } }) => css`
    display: inline;

    margin: 0;
    margin-right: 12px;
    padding: 0;

    > a {
      font-family: ${typography.fontFamily.primary};
      font-size: 1rem;

      text-decoration: none;

      :hover {
        font-weight: ${typography.fontWeight[6]};
      }
    }
  `
);

export default NavListItem;
