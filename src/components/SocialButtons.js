<<<<<<< current
import React from 'react';
import styled from 'styled-components';
import fontawesome from '@fortawesome/fontawesome';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import brands from '@fortawesome/fontawesome-free-brands';
import Instagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import Pinterest from '@fortawesome/fontawesome-free-brands/faPinterest';

const SocialButtons = () => {
  return (
    <StyledContainer>
      <a
        href="https://www.facebook.com/MakingNevadaHome/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="btn btnFacebook">
          <FontAwesomeIcon
            icon={Facebook}
            size="3x"
            className="icon iconFacebook"
          />
        </div>
      </a>
      <a
        href="https://www.instagram.com/MakingNevadaHome/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="btn btnInstagram">
          <FontAwesomeIcon
            icon={Instagram}
            size="3x"
            className="icon iconInstagram"
          />
        </div>
      </a>
      <a>
        <div className="btn btnTwitter">
          <FontAwesomeIcon
            icon={Twitter}
            size="3x"
            className="icon iconTwitter"
          />
        </div>
      </a>
      <a
        href="https://www.pinterest.com/MakingNevadaHome/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="btn btnPinterest">
          <FontAwesomeIcon
            icon={Pinterest}
            size="3x"
            className="icon iconPinterest"
          />
        </div>
      </a>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 500px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  flex-shrink: 1;
  margin: 0 auto;
  a {
    margin: auto;
  }
  .btn {
    height: 90px;
    width: 90px;
    color: black;
    background-color: white;
    margin: 10px auto;
    text-align: center;
    overflow: hidden;
    border-radius: 28%;
    box-shadow: 0 5px 15px -5px rgba(0, 0, 0, 0.1);
    opacity: 0.99;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
    &:hover {
      cursor: pointer;
    }
  }
  .icon {
    color: white;
    transition: background-color 0.3s, color 0.3s, transform 0.3s;
    transform: scale(0.8, 0.8);
  }

  .btnFacebook {
    background-color: #3b5998;
    &:hover {
      background-color: white;
      .iconFacebook {
        color: #3b5998;
        transform: scale(1.1, 1.1);
      }
    }
  }

  .btnInstagram {
    background-color: #cd486b;
    &:hover {
      background-color: white;
      .iconInstagram {
        color: #cd486b;
        transform: scale(1.1, 1.1);
      }
    }
  }

  .btnTwitter {
    background-color: #3cf;
    &:hover {
      background-color: white;
      .iconTwitter {
        color: #3cf;
        transform: scale(1.1, 1.1);
      }
    }
  }

  .btnPinterest {
    background-color: #cb2027;
    &:hover {
      background-color: white;
      .iconPinterest {
        color: #cb2027;
        transform: scale(1.1, 1.1);
      }
    }
  }

  .icon {
    margin: 20px;
  }

  @media (max-width: 500px) {
    width: 300px;
    margin-right: 20vw;
    a {
      width: 50px;
      height: 50px;
    }
    .btn {
      transform: scale(0.8, 0.8);
    }
  }

  @media (max-width: 400px) {
    width: 225px;
    margin: 0 auto;
    margin-right: 20vw;
    .btn {
      transform: scale(0.5, 0.5);
    }
  }
`;
export default SocialButtons;
=======
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
  width: 100px;
  height: 100px;
  margin: 0 auto;
  .icon {
    margin: 20px;
    margin-top: 40px;
  }
`;
export default SocialButtons;
>>>>>>> before discard
