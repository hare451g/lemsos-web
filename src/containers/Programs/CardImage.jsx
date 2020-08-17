import styled, { css } from 'styled-components';

const attrs = (props) => ({
  src: props.src || 'none',
});

const style = ({ src }) => css`
  background: url(${src});
  background-repeat: no-repeat;
  background-position: center center;

  width: 100%;
  height: 320px;
`;

const CardImage = styled.div.attrs(attrs)(style);

export default CardImage;
