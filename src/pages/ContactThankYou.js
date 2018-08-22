import React from 'react';
import styled from 'styled-components';

const ContactThankYou = () => {
  return (
    <StyledBody>
      <ThankYou>Thank you for contacting us!</ThankYou>
      <ThankYou>We will be in contact with you shortly.</ThankYou>
    </StyledBody>
  );
};

const ThankYou = styled.h2`
  width: 500px;
  margin: 0 auto;
  padding: 1rem;
`;

const StyledBody = styled.div`
  width: 100%;
  height: 1000px;
`;
export default ContactThankYou;
