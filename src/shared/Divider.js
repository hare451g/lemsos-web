import styled, { css } from 'styled-components';
import { layout, space, border } from 'styled-system';

const Divider = styled.hr(
  ({ theme: { colors } }) => css`
    ${layout};
    ${space};
    ${border};
    border-color: ${colors.darkGray3};
  `
);

export default Divider;
