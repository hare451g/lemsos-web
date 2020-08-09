import styled, { css } from 'styled-components';

const variants = {
  solid: css`
    background: solid;
    border: none;
  `,
  outline: css`
    background: none;
    border: solid 1px;
  `,
};

const Button = styled.button.attrs((props) => ({
  block: props.block || false,
  color: props.color || '',
  variant: props.variant || 'solid',
}))(
  ({ block, color, variant, theme: { shadows, colors } }) => css`
    border: none;
    border-radius: 4px;

    font-style: normal;
    font-size: 14px;
    font-weight: 600;

    line-height: 16px;
    text-transform: uppercase;
    cursor: pointer;

    transition: 0.2s;

    padding: 0.5rem 1rem;

    :hover {
      box-shadow: ${shadows.small};
    }

    :focus {
      box-shadow: ${shadows.medium};
      outline: none;
    }

    :active {
      box-shadow: none;
      outline: none;
    }

    ${
      block &&
      css`
        width: 100%;
        padding: 1rem 1rem;
      `
    }

    ${variant && variants[variant]}

    ${
      color && variant === 'outline'
        ? css`
            border-color: ${colors[color]};
            color: ${colors[color]};
          `
        : css`
            color: ${colors.white};
            background-color: ${colors[color]};
          `
    }
  `
);

export default Button;
