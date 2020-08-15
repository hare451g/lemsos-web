import styled, { css } from 'styled-components';

const Button = styled.button.attrs((props) => ({
  isActive: props.isActive || false,
}))(
  ({ isActive, theme: { colors } }) => css`
    border-left: 1px solid ${colors.lightGray};
    border-top: 1px solid ${colors.lightGray};
    border-right: 1px solid ${colors.lightGray};
    border-bottom: none;

    width: 100%;
    padding: 1rem 0.5rem;

    background: ${colors.lightGray5};

    font-weight: 400;
    font-size: 1.15rem;

    cursor: pointer;

    :hover {
      color: ${colors.primary};
    }

    :focus {
      outline: none;
    }

    ${isActive &&
    css`
      font-weight: 600;
      color: ${colors.primary};
    `}
  `
);

export default Button;
