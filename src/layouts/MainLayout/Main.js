import styled, { css } from 'styled-components';

const Main = styled.main(
  ({ theme: { colors } }) => css`
    background-color: ${colors.lightGray6};
    padding: 8px 16px;
    margin-top: 100px;
    flex: 1;
  `
);

export default Main;
