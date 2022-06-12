import React from 'react';
import styled, { css } from 'styled-components';

const Text = ({ tag = 'p', type = 'description', ...props }) => {
  const Tag = tag;

  return <Tag {...props} />;
};

export const Typography = styled(Text)`
  ${({ variant, theme }) =>
    css`
      ${theme[variant]}
    `};
`;
