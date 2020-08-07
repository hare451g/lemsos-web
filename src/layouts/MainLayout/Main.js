import styled, { css } from 'styled-components';

const Main = styled.main(
  ({ theme: { colors, screen } }) => css`
    background-color: ${colors.lightGray6};
    padding: 8px 16px;
    flex: 1;

    @media only screen and (max-width: ${screen.mobile.frame}px) {
      margin-top: 100px;
    }
  `
);

export default Main;
