import styled from 'styled-components';
import { color, border, flexbox, layout, position, space } from 'styled-system';

const Box = styled.div`
  display: block;
  ${color}
  ${border}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

export default Box;
