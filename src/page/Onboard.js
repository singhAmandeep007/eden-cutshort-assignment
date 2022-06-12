import React, { useState } from 'react';
import styled from 'styled-components';
import {
  StepWiseProgress,
  Typography,
  Input,
  InputCard,
  Button,
} from '../components';

import { StepsData } from './Onboard.data';

import check from '../assests/icons/check.png';

export const Onboard = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    user: {
      fullName: '',
      displayName: '',
    },
    workspace: {
      workspaceName: '',
      workspaceURL: '',
    },
    usedBy: {
      type: 'myself',
    },
  });

  const handleFormFieldChange = function ({ group, inputId: key, value }) {
    setFormData({ ...formData, [group]: { ...formData[group], [key]: value } });
  };

  const handleClick = function () {
    if (currentStep + 1 === StepsData.length) return;
    setCurrentStep((prevStep) => {
      return prevStep + 1;
    });
  };

  return (
    <Container>
      <StepWiseProgress
        currentStep={currentStep}
        totalSteps={StepsData.length}
      />

      {StepsData.length - 1 === currentStep && (
        <CompletionImageContainer>
          <img src={check} alt="completed_check" />
        </CompletionImageContainer>
      )}

      <HeadingContainer>
        <Typography tag="h2" variant="title">
          {StepsData.length - 1 === currentStep
            ? `${StepsData[currentStep]['title']} ${formData['user']['fullName']}!`
            : StepsData[currentStep]['title']}
        </Typography>
        <Typography tag="p" variant="description">
          {StepsData[currentStep]['description']}
        </Typography>
      </HeadingContainer>

      <StyledForm>
        {StepsData[currentStep]['formFields'] && (
          <FormContainer $direction="column">
            {StepsData[currentStep]['formFields'].map(
              ({
                key,
                type,
                placeholder,
                label,
                inputId,
                group,
                variant = '',
                groupText = '',
                labelSub = '',
              }) => {
                return (
                  <Input
                    key={key}
                    type={type}
                    placeholder={placeholder}
                    label={label}
                    value={formData[group][inputId]}
                    callback={(value) =>
                      handleFormFieldChange({ group, inputId, value })
                    }
                    inputId={inputId}
                    variant={variant}
                    groupText={groupText}
                    labelSub={labelSub}
                  />
                );
              }
            )}
          </FormContainer>
        )}

        {StepsData[currentStep]['formCardOptions'] && (
          <FormContainer $direction="row">
            {StepsData[currentStep]['formCardOptions'].map(
              ({
                key,
                type,
                description = '',
                title = '',
                value = '',
                inputId,
                group,
                icon = '',
              }) => {
                return (
                  <InputCard
                    key={key}
                    type={type}
                    value={value}
                    isActive={formData[group][inputId] === value}
                    description={description}
                    title={title}
                    icon={icon}
                    callback={(value) =>
                      handleFormFieldChange({ group, inputId, value })
                    }
                  />
                );
              }
            )}
          </FormContainer>
        )}

        <Button
          text={StepsData[currentStep]['button']['text']}
          onClick={handleClick}
          variant="primaryButton"
          type="button"
        />
      </StyledForm>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25rem;
  margin: 1rem 0;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: ${({ $direction = 'row' }) => $direction};
  align-items: center;
  width: 100%;
  gap: 1rem;
  margin: 2rem 0 1rem 0;
`;

const CompletionImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  img {
    height: 100%;
    width: 8rem;
    margin-bottom: 1.5rem;
  }
`;
