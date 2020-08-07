import styled, { css } from 'styled-components';

const MobNavContainer = styled.div.attrs((props) => ({
  isOpen: props.isOpen || false,
  total: props.total || 0,
}))(
  ({ isOpen, total, theme: { screen } }) => css`
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);

    ${isOpen
      ? css`
          overflow-y: hidden;
          max-height: ${35*total + 100}px;
        `
      : css`
          max-height: 0;
        `}
    ul {
      margin: 0px;
      padding: 0px;
      margin-top: 100px;
    }

    @media only screen and (min-width: ${screen.tablet.frame}px) {
      display: none;
    }
  `
);

export default MobNavContainer;
