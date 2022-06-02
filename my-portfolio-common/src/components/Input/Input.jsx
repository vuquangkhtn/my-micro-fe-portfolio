import React from 'react';
import styled from 'styled-components';
import { inputMixin } from './baseStyles';

const StyledInput = styled.input`
  ${inputMixin};
`;

const Input = ({ ...restProps }) => <StyledInput {...restProps} />;

export default Input;
