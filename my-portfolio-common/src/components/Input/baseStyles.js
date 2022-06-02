import { css } from 'styled-components';

export const inputMixin = css`
  background: transparent;
  border-radius: 2px;
  outline: none;
  box-shadow: none;
  font-weight: bold;
  margin: 16px 0;
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  border: 1px solid #ced4da;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

  &:not(textarea) {
    height: 48px;
  }

  &:hover,
  &:focus {
    border-color: #ffc200;
    color: #495057;
    background-color: #fff;
    outline: 0;
  }

  &::-ms-expand {
    background-color: transparent;
    border: 0;
  }

  &::-webkit-input-placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &::-moz-placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &:-ms-input-placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &::-ms-input-placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &::placeholder {
    color: #6c757d;
    opacity: 1;
  }

  &:disabled,
  &[readonly] {
    background-color: #e9ecef;
    opacity: 1;
  }
`;
