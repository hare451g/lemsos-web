import styled, { css } from 'styled-components';

const Slide = styled.div.attrs((props) => ({
  src: props.src || '',
}))(
  ({ src }) => css`
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${src});
    width: 100%;
    height: 528px;
  `
);

export default Slide;
