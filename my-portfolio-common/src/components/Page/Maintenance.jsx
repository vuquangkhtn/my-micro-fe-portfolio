import React from 'react';
import styled from 'styled-components';
import Link from '../Link/Link';

const StyledMaintenance = styled.article`
  body {
    text-align: center;
    padding: 150px;
  }
  h1 {
    font-size: 50px;
    text-align: center;
  }
  body {
    font: 20px Helvetica, sans-serif;
    color: #333;
  }
  article {
    display: block;
    text-align: left;
    width: 650px;
    margin: 0 auto;
  }

  div {
    display: flex;
    justify-content: center;
  }

  p {
    text-align: center;
    max-width: 600px;
    width: 100%;
  }
`;

const Maintenance = () => {
  return (
    <StyledMaintenance>
      <h1>We&rsquo;ll be back soon!</h1>
      <div>
        <p>
          Sorry for the inconvenience but we&rsquo;re performing some maintenance at the moment. If
          you need to you can always <Link href="mailto:vuquangkhtn@gmail.com">contact us</Link>,
          otherwise we&rsquo;ll be back online shortly!
        </p>
      </div>
    </StyledMaintenance>
  );
};

export default Maintenance;
