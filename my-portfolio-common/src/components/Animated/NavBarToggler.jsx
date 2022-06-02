import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';

const expandedMixin = css`
  .navbar-toggler-icon:first-child {
    transform: rotate(45deg);
    top: 6px;
  }
  .navbar-toggler-icon:nth-child(2) {
    display: none;
  }
  .navbar-toggler-icon:last-child {
    transform: rotate(-45deg);
    bottom: 1px;
  }
`;

const StyledToggler = styled.button`
  border: 0;
  padding: 0;
  width: 32px;
  height: 32px;
  line-height: 32px;
  outline: none;
  cursor: pointer;
  margin-right: 10px;
  background: none;

  &:focus {
    outline: none;
  }

  .navbar-toggler-icon {
    background: ${(props) => props.color || '#212121'};
    display: block;
    width: 100%;
    height: 2px;
    margin: 5px 0;
    transition: all 0.4s ease;
    position: relative;
  }

  ${(props) => props.expanded && expandedMixin}
`;

const NavBarToggler = ({ expanded, color, ...restProps }) => {
  return (
    <StyledToggler type="button" expanded={expanded} color={color} {...restProps}>
      <span className="navbar-toggler-icon"></span>
      <span className="navbar-toggler-icon"></span>
      <span className="navbar-toggler-icon"></span>
    </StyledToggler>
  );
};

NavBarToggler.propTypes = {
  expanded: PropTypes.bool,
  color: PropTypes.string
};

export default NavBarToggler;
