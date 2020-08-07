import styled, { css } from 'styled-components';

const MobNavItem = styled.li.attrs((props) => ({
  vertical: props.vertical || false,
}))(
  ({ vertical, theme: { typography, colors } }) => css`
    display: ${vertical ? 'block' : 'inline'};
    margin: 0;
    padding: 8px 16px;
    border-bottom: 1px solid ${colors.lightGray};

    text-align: center;

    > a {
      font-family: ${typography.fontFamily.primary};
      font-size: 1.25rem;
      font-weight: 600;
      width: 100%;

      text-decoration: none;

      :hover {
        font-weight: ${typography.fontWeight[6]};
      }
    }
  `
);

export default MobNavItem;
