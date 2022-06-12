import React from 'react';
import styled from 'styled-components';

export function StepWiseProgress({ currentStep = 0, totalSteps = 0 }) {
  let numSteps = Array.from({ length: totalSteps }, (_, i) => i);

  return (
    <StepsContainer>
      <StepsList>
        {numSteps.map((step) => {
          let isActive = currentStep === step;
          let isComplete = currentStep > step;

          return (
            <StepItem
              $isActive={isActive}
              $isComplete={isComplete}
              key={step + 1}
            >
              <StepIconContainer $isActive={isActive} $isComplete={isComplete}>
                {step + 1}
              </StepIconContainer>
            </StepItem>
          );
        })}
      </StepsList>
    </StepsContainer>
  );
}

const StepsContainer = styled.div`
  width: min(30rem, 500px);
  margin-bottom: 2rem;
`;

const StepsList = styled.ul`
  display: flex;
  width: 100%;
  padding-bottom: 4rem;
  list-style: none;
`;

const StepItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  position: relative;

  &:not(:last-child) {
    &:before,
    &:after {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 2px;
      content: '';
      z-index: -1;
      transform: translate(0%, -50%);
    }
  }

  &:before {
    width: 100%;
    background-color: var(--color-progress-incomplete);
  }

  &:after {
    width: 0;
    background-color: var(--color-progress-complete);
  }

  ${({ $isActive, $isComplete }) =>
    $isComplete
      ? `&:after {
        width: 100%;
      }`
      : $isActive
      ? `&:after {
        width: 50%;
      }`
      : ``}
`;

const StepIconContainer = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;

  font-size: 1rem;
  font-weight: 400;

  color: var(--color-primary-text-medium);
  border: 1px solid var(--color-progress-incomplete);
  background-color: var(--color-primary-text-light);

  ${({ $isComplete, $isActive }) =>
    $isComplete || $isActive
      ? `background-color: var(--color-primary);
				border-color: var(--color-primary);
				color: var(--color-primary-text-light);`
      : ''}
`;
