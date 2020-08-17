import styled, { css } from 'styled-components';

const Main = styled.main(
  ({ theme: { colors } }) => css`
    background: linear-gradient(${colors.lightGray6}, ${colors.lightGray7});
    flex: 1;
    margin-top: 70px;
  `
);

export default Main;
