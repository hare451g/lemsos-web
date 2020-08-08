import styled, { css } from 'styled-components';

const Main = styled.main(
  ({ theme: { colors } }) => css`
    background-color: ${colors.lightGray6};
    flex: 1;
    margin-top: 70px;
  `
);

export default Main;
