import styled, { css } from 'styled-components';

const NavListItem = styled.li.attrs((props) => ({
  vertical: props.vertical || false,
}))(
  ({ vertical, theme: { typography } }) => css`
    display: ${vertical ? 'block' : 'inline'};
    margin: 0;
    margin-right: 12px;
    padding: 0 0;

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
