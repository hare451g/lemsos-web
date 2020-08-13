import styled from 'styled-components';
import { border, flexbox, layout, position, space } from 'styled-system';

const Box = styled.div`
  display: block;
  ${border}
  ${flexbox}
  ${layout}
  ${position}
  ${space}
`;

export default Box;
