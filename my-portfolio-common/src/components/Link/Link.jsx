import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledLink = styled.a`
  font-weight: normal;
  text-decoration: none;
  transition: all 0.4s ease;
  text-decoration: none;
  background-color: transparent;
  -webkit-text-decoration-skip: objects;
  color: #4848a0;

  &:hover {
    color: #ffc200;
  }
`;

const Link = ({ children, ...restProps }) => {
  return <StyledLink {...restProps}>{children}</StyledLink>;
};

Link.propTypes = {
  children: PropTypes.any.isRequired
};

export default Link;
