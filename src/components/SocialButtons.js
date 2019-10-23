import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Instagram from '@fortawesome/fontawesome-free-brands/faInstagram'
import Facebook from '@fortawesome/fontawesome-free-brands/faFacebookF'
import Twitter from '@fortawesome/fontawesome-free-brands/faTwitter'
import Pinterest from '@fortawesome/fontawesome-free-brands/faPinterest'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const SocialButtons = () => {
  return (
    <StyledContainer>
      <li>
        <OutboundLink
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
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
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
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
          href="https://www.twitter.com/MakingNVHome/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn btnTwitter">
            <FontAwesomeIcon
              icon={Twitter}
              size="3x"
              className="icon iconTwitter"
            />
          </div>
        </OutboundLink>
      </li>
      <li>
        <OutboundLink
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
        </OutboundLink>
      </li>
    </StyledContainer>
  )
}

const StyledContainer = styled.ul`
  width: 700px;
  height: 100px;
  display: flex;
  justify-content: space-around;
  flex-shrink: 1;
  margin: 2rem auto 0;
  padding: 0;
  .btn {
    height: 90px;
    width: 90px;
    color: black;
    background-color: white;
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
        transform: scale(1, 1.1);
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

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    width: 100%;
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
`
export default SocialButtons
