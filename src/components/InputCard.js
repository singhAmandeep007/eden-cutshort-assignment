import React from 'react';
import styled from 'styled-components';

export const InputCard = ({
  callback = () => {},
  title = '',
  description = '',
  icon,
  isActive = false,
  value,
}) => {
  const handleClick = function () {
    callback(value);
  };

  return (
    <StyledInputCard onClick={handleClick} $isActive={isActive}>
      <StyledInputIcon src={icon} />
      <InputCardTitle>{title}</InputCardTitle>
      <InputCardDescription>{description}</InputCardDescription>
    </StyledInputCard>
  );
};

const StyledInputCard = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;

  border-radius: 5px;
  cursor: pointer;
  padding: 1.2rem;

  border: ${({ $isActive }) =>
    $isActive
      ? '1px solid var(--color-primary)'
      : '1px solid var(--color-input-border)'};
`;

const StyledInputIcon = styled.img`
  height: 1.5rem;
  width: 1.5rem;
`;

const InputCardTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: var(--color-primary-text);
`;

const InputCardDescription = styled.p`
  font-size: 1rem;
  display: flex;
  flex-wrap: wrap;
  font-weight: 400;
  color: var(--color-primary-text-medium);
`;
