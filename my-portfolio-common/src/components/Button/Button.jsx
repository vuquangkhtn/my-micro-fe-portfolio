import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const primaryMixin = css`
  background: #eee;
  color: #5b5b5b;
  &:hover {
    color: #ffc200;
  }
`;

const secondaryMixin = css`
  background: #474559;
  color: #ffffff;
  &:hover {
    background: #ffc200;
    color: #ffffff;
  }
`;

const submitMixin = css`
  background: #ffc200;
  color: #ffffff;
  &:hover {
    background: #474559;
    color: #ffffff;
  }
`;

const StyledButton = styled.button`
  display: inline-block;
  font-weight: 400;
  text-align: center;
  white-space: nowrap;
  vertical-align: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-weight: bold;
  border-radius: 50px;
  padding: 13px 29px;
  font-size: 14px;
  line-height: normal;
  overflow: hidden;
  transition: all 0.4s ease;

  &:hover,
  &:focus {
    text-decoration: none;
  }

  &.disabled,
  &:disabled {
    opacity: 0.65;
  }

  &:not(:disabled):not(.disabled) {
    cursor: pointer;
  }

  &:not(:disabled):not(.disabled):active,
  &:not(:disabled):not(.disabled).active {
    background-image: none;
  }

  ${(props) => props.mode === 'primary' && primaryMixin};
  ${(props) => props.mode === 'secondary' && secondaryMixin};
  ${(props) => props.mode === 'submit' && submitMixin};
`;

const Button = ({ mode, backgroundColor, children, ...props }) => {
  return (
    <StyledButton mode={mode} style={backgroundColor && { backgroundColor }} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  mode: PropTypes.oneOf(['primary', 'secondary', 'submit']),
  backgroundColor: PropTypes.string,
  children: PropTypes.any.isRequired,
  onClick: PropTypes.func
};

Button.defaultProps = {
  backgroundColor: null,
  mode: 'primary',
  onClick: undefined
};

export default Button;
