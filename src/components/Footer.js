import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import SocialButtons from './SocialButtons'

const Footer = () => {
  return (
    <StyledFooter>
      <SocialButtons />
      <div className="footer-container inner">
        <div className="footer-info">
          <ul className="footer-nav-container">
            <li>
              <Link to="/About">About</Link>
            </li>
            <li>
              <Link to="/CurrentListings">Current Listings</Link>
            </li>
            <li>
              <Link to="/Search">Home Search</Link>
            </li>
            <li>
              <Link to="/Contact">Contact</Link>
            </li>
          </ul>
          <p>&copy; 2019 makingnevadahome.com All rights reserved</p>
          <p>Keller Williams Realty Southwest</p>
          <p>6180 Brent Thurman Way #10</p>
          <p>Las Vegas, NV 89148</p>
          <Link to="/sitemap">Sitemap</Link>
        </div>
        <div className="logos">
          <img
            src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1535568847/makingnevadahome/realtorlogos.png"
            alt="Realtor, MLS, EOH logos"
            height="80"
          />
        </div>
      </div>
    </StyledFooter>
  )
}

//-----------Styles--------------

const StyledFooter = styled.footer`
  width: 100%;
  background-color: ${({ theme }) => theme.darkGrey};
  min-height: 150px;
  color: white;
  font-size: 15px;
  padding-top: 20px;

  .footer-container {
    margin: 0 auto;
    padding: 20px;
    display: flex;
    justify-content: space-between;
    p {
      margin: 1rem 0;
    }
    a {
      color: white;
      text-decoration: none;
    }
    @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
      text-align: center;
      font-size: 12px;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .logos {
        height: 60px;
        margin: 10px auto;
      }
    }
  }

  .footer-nav-container {
    display: flex;
    justify-content: space-between;
    padding: 0;
    a {
      color: ${({ theme }) => theme.offWhite};
      text-decoration: none;
    }

    li::after {
      display: inline-block;
      content: '|';
      padding-left: 0.6rem;
    }

    li:last-of-type {
      &::after {
        content: '';
      }
    }
  }

  .footer-info {
    max-width: 500px;
  }
`

//-----------------End Styles---------------

export default Footer
