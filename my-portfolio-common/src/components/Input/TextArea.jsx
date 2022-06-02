import React from 'react';
import styled from 'styled-components';
import { inputMixin } from './baseStyles';

const StyledTextArea = styled.textarea`
  overflow: auto;
  resize: vertical;
  margin: 0;

  ${inputMixin};
`;

const TextArea = ({ ...restProps }) => <StyledTextArea {...restProps} />;

export default TextArea;
