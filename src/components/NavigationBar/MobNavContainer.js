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
          max-height: ${48 * total}px;
          opacity: 1;
          ul {
            margin-top: 70px;
            margin-bottom: 0px;
          }
        `
      : css`
          max-height: 0;
          opacity: 0;
          margin-bottom: 4.375rem;
        `}
    ul {
      padding: 0px;
    }

    @media only screen and (min-width: ${screen.tablet.frame}px) {
      display: none;
    }
  `
);

export default MobNavContainer;
