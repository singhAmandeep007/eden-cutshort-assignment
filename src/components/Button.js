import React from 'react';
import styled, { css } from 'styled-components';

export function Button({
  type = 'button',
  text = '',
  variant = 'primaryButton',
  onClick = () => {},
}) {
  return (
    <StyledButton type={type} onClick={onClick} $variant={variant}>
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  font-size: 1rem;

  height: 3rem;
  padding: 1rem;
  border: none;
  border-radius: 5px;

  margin: 1rem;

  ${({ $variant, theme }) =>
    css`
      ${theme[$variant]}
    `};

  &:hover {
    cursor: pointer;
  }
`;
