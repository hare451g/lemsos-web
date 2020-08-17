import styled, { css } from 'styled-components';

const MobNavContainer = styled.div.attrs((props) => ({
  isOpen: props.isOpen || false,
  total: props.total || 0,
}))(
  ({ isOpen, total, theme: { screen } }) => css`
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: cubic-bezier(0, 1, 0.5, 1);
    position: fixed;
    top: 1px;
    z-index: 1;
    width: 100%;
    ${isOpen
      ? css`
          overflow-y: hidden;
          max-height: ${48 * total}px;
          opacity: 1;
          ul {
            margin-top: 70px;
            margin-bottom: 0px;
          }
        `
      : css`
          display: none;
          opacity: 0;
        `}
    ul {
      padding: 0px;
    }

    @media only screen and (min-width: ${screen.tablet.frame}) {
      display: none;
    }
  `
);

export default MobNavContainer;
