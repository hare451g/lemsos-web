import styled, { css } from 'styled-components';

const MobNavItem = styled.li.attrs((props) => ({
  vertical: props.vertical || false,
}))(
  ({ vertical, theme: { typography, colors } }) => css`
    display: ${vertical ? 'block' : 'inline'};
    margin: 0;
    padding: 8px 16px;
    width: 100%;

    border-bottom: 1px solid ${colors.lightGray};

    text-align: center;
    background-color: rgba(250, 250, 250, 0.35);
    backdrop-filter: saturate(180%) blur(8px);

    :hover {
      background-color: rgba(254, 254, 254, 1);
    }

    a {
      font-family: ${typography.fontFamily.primary};
      font-size: 1.25rem;
      font-weight: 600;
      width: 100%;

      text-decoration: none;
    }
  `
);

export default MobNavItem;
