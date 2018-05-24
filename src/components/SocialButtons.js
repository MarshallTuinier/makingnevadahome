import React from 'react';
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import Instagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebook';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';

const SocialButtons = () => {
  return (
    <StyledContainer>
      <FontAwesomeIcon icon={Facebook} size="4x" className="icon" />
      <FontAwesomeIcon icon={Instagram} size="4x" className="icon" />
      <FontAwesomeIcon icon={Twitter} size="4x" className="icon" />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 300px;
  height: 100px;
  margin: 0 auto;

  .icon {
    margin: 20px;
    margin-top: 40px;
  }
`;
export default SocialButtons;
