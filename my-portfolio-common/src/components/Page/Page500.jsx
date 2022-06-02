import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const StyledError = styled.div`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,700');

  .message {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    h1,
    h2,
    h3 {
      margin: 0;
      line-height: 0.8;
    }

    h2,
    h3 {
      font-weight: 300;
    }

    h1 {
      font-weight: 700;
      font-size: 8em;
    }

    h2 {
      margin: 30px 0;
    }

    h3 {
      font-size: 2.5em;
    }

    h4 {
      display: inline-block;
      margin: 0 15px;
    }
  }
`;

const Error = () => {
  return (
    <StyledError>
      <div className="message">
        <h1>500</h1>
        <h3>Server Error</h3>
        <h2>It&apos;s not you, it&apos;s me.</h2>
        <Button mode="secondary" onClick={() => window?.history.back()}>
          Go Back
        </Button>
      </div>
    </StyledError>
  );
};

export default Error;
