import React from 'react';
import Link from 'gatsby-link';
import styled from 'styled-components';
import realtorlogos from '../assets/realtorlogos.png';
import SocialButtons from './SocialButtons';
const Footer = () => {
  return (
    <StyledFooter>
      <SocialButtons />
      <div className="footer-container">
        <div className="footer-info">
          <div className="footer-nav-container">
            <Link to="/About">
              <p>About</p>
            </Link>
            <span>|</span>
            <Link to="/OurProperties">
              <p>Our Properties</p>
            </Link>
            <span>|</span>
            <Link to="/Search">
              <p>Home Search</p>
            </Link>
            <span>|</span>
            <Link to="/Contact">
              <p>Contact</p>
            </Link>
          </div>
          <p>
            &copy; 2017 makingnevadahome.com PID # 201743. All rights reserved.
          </p>
          <p>
            CR Realty Services, LLC 1200 S 4th St, Suite 102 Las Vegas, NV 89104
          </p>
          <Link to="/Sitemap">
            <p>Sitemap</p>
          </Link>
        </div>
        <div className="logos">
          <img src={realtorlogos} alt="Realtor, MLS, EOH logos" height="80" />
        </div>
      </div>
    </StyledFooter>
  );
};

//-----------Styles--------------

const StyledFooter = styled.div`
  width: 100%;
  background-color: #464646;
  height: 100%;
  min-height: 150px;
  color: white;
  font-size: 15px;
  padding-top: 20px;

  .footer-container {
    margin: 0 auto;
    max-width: 1200px;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    p {
      margin-bottom: 0;
    }
    a {
      color: white;
      text-decoration: none;
    }
    @media (max-width: 600px) {
      text-align: center;
      font-size: 12px;
      flex-direction: column;
      .logos {
        height: 60px;
        margin: 10px auto;
      }
      .footer-nav-container {
        margin: 0 auto;
      }
    }
  }

  .footer-nav-container {
    display: flex;
    justify-content: space-between;
    max-width: 400px;
    p {
      margin-bottom: 0;
    }
    a {
      color: white;
      text-decoration: none;
    }
  }

  .footer-info {
    max-width: 500px;
  }
`;

//-----------------End Styles---------------

export default Footer;
