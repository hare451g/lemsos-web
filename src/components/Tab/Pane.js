import styled, { css } from 'styled-components';

const Pane = styled.div.attrs((props) => ({
  isActive: props.isActive || false,
}))(
  ({ isActive, theme: { colors } }) => css`
    display: ${isActive ? 'block' : 'none'};
    border: 1px solid ${colors.lightGray};
    border-radius: 0px 0px 8px 8px;
    padding: 1rem;
  `
);

export default Pane;
