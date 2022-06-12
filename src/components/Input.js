import React from 'react';
import styled from 'styled-components';

export function Input({
  type = 'text',
  placeholder = '',
  label = '',
  inputId = '',
  callback = () => {},
  variant = '',
  groupText = '',
  labelSub = '',
  value = '',
}) {
  const handleInputChange = function (event) {
    callback(event.target.value);
  };

  return (
    <InputContainer>
      <InputLabel htmlFor={inputId}>
        {label} {labelSub && <span>{labelSub}</span>}
      </InputLabel>
      <InputBoxContainer $variant={variant}>
        {variant === 'inputGroup' && <InputGroup>{groupText}</InputGroup>}
        <InputBox
          type={type}
          value={value}
          placeholder={placeholder}
          id={inputId}
          onChange={handleInputChange}
          autoComplete="off"
          $variant={variant}
        />
      </InputBoxContainer>
    </InputContainer>
  );
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const InputLabel = styled.label`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary-text-dark);
  margin-bottom: 0.5rem;

  span {
    font-size: 1rem;
    margin-left: 0.2rem;
    color: var(--color-primary-text-medium);
    font-weight: 300;
    opacity: 0.5;
  }
`;

const InputBoxContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
  width: 100%;
`;

const InputGroup = styled.span`
  display: flex;
  align-items: center;
  padding: 0.6rem 0.8rem;

  font-size: 1rem;
  font-weight: 400;

  color: var(--color-primary-text-medium);
  text-align: center;
  white-space: nowrap;

  background-color: var(--color-group-input-background);
  border: 1px solid var(--color-input-border);
  border-radius: 5px;

  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`;

const InputBox = styled.input`
  border: 1px solid var(--color-input-border);
  border-radius: 5px;

  flex: 1 1 auto;
  display: block;

  padding: 0.6rem 0.8rem;
  font-size: 1rem;
  font-weight: 400;

  ${({ $variant }) =>
    $variant === 'inputGroup'
      ? ` border-top-left-radius: 0;
    			border-bottom-left-radius: 0;`
      : ''}

  &:focus,
  &:focus-visible {
    outline: 2px solid var(--color-primary);
  }
  ::placeholder {
    color: var(--color-primary-text-medium);
  }
`;
