import styled, { css } from 'styled-components';

const Overlay = styled.div(
  ({ theme: { colors } }) => css`
    position: absolute;
    background-color: rgba(125, 126, 128, 0.3);
    backdrop-filter: saturate(180%) blur(20px);
    padding: 16px 16px;
    color: ${colors.white};
    bottom: 4px;
    width: 100%;
  `
);

export default Overlay;
