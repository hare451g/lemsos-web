import styled, { css } from 'styled-components';

const Main = styled.main(
  ({ theme: { colors, screen } }) => css`
    background-color: ${colors.lightGray6};
    padding: 8px 16px;
    flex: 1;

    @media only screen and (min-width: ${screen.tablet.frame}px) {
      margin-top: 70px;
    }
  `
);

export default Main;
