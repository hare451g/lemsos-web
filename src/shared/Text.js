import styled, { css } from 'styled-components';
import { color, space, typography as styledTypography } from 'styled-system';

const Text = styled.p(
  ({ theme: { typography, colors } }) => css`
  font-family: ${typography.fontFamily.primary};
  font-size: 1rem;
  
  color: ${colors.darkGray5};
  
  margin: 0;
  padding: 0;

  ${color}
  ${space}
  ${styledTypography}
`
);

export default Text;
