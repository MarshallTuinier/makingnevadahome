import React, { Component } from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';
import ContactCard from '../components/ContactCard';
import ContactBlock from '../components/ContactBlock';
import { Icon } from 'react-fa';
import diamond from '../assets/diamond-upholstery.png';
import CRRealty from '../assets/CRRealty.png';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navOpen: false
    };
  }

  handleHamburger = () => {
    this.setState({ navOpen: !this.state.navOpen });
  };

  handleHomeClick = () => {
    if (!!this.state.navOpen) {
      this.setState({ navOpen: false });
    }
  };

  render() {
    return (
      <NavBar>
        <StyledHeader open={this.state.navOpen}>
          <div className="contact-buttons">
            <ContactBlock className="bars" onClick={this.handleHamburger}>
              <Icon name="bars" />
            </ContactBlock>
            <ContactBlock linkTo="tel:7028215142">
              <Icon name="phone" />
            </ContactBlock>
            <ContactBlock linkTo="mailto: info@makingnevadahome.com">
              <Icon name="envelope" />
            </ContactBlock>
          </div>
          <div className="header-container">
            <div className="header-left">
              <div className="logo">
                <img src={CRRealty} />
              </div>
              <div className="header-content">
                <h1>
                  <Link className="link" to="/">
                    <span onClick={this.handleHomeClick}>
                      <span className="blue">making</span>NEVADA<span className="blue">
                        home
                      </span>
                    </span>
                  </Link>
                </h1>
                <p className="tagline">
                  Your #1 Choice for Las Vegas Valley Real Estate
                </p>
              </div>
            </div>
            <div className="nav-right">
              <div className="contact-wrapper">
                <ContactCard>
                  <h5>Jason Brown</h5>
                  <Icon name="phone" />
                  <span className="tel-number">702-821-5142</span>
                </ContactCard>
                <ContactCard>
                  <h5>David Hofer</h5>
                  <Icon name="phone" />
                  <span className="tel-number">702-595-6381</span>
                </ContactCard>
              </div>
              <StyledNavContainer open={this.state.navOpen}>
                <Link to="/About">
                  <div className="nav-item" onClick={this.handleHamburger}>
                    About
                  </div>
                </Link>
                <Link to="/CurrentListings">
                  <div className="nav-item" onClick={this.handleHamburger}>
                    Current Listings
                  </div>
                </Link>
                <Link to="/Search">
                  <div className="nav-item" onClick={this.handleHamburger}>
                    Home Search
                  </div>
                </Link>
                <Link to="/Contact">
                  <div className="nav-item" onClick={this.handleHamburger}>
                    Contact
                  </div>
                </Link>
              </StyledNavContainer>
            </div>
          </div>
        </StyledHeader>
      </NavBar>
    );
  }
}

//---------------Styles----------------------

const NavBar = styled.nav`
  width: 100%;
  background: #20ace1;
  background-image: url(${diamond});
  text-shadow: 1px 1px 2px black;
  .blue {
    color: #003153;
  }
`;
const StyledHeader = styled.div`
  color: #003153;
  width: 100%;
  margin: 0 auto;
  height: 100%;

  .contact-buttons {
    display: none;
  }

  h1 {
    font-weight: normal;
    margin-top: 1rem;
    margin-bottom: 2px;
    a {
      &:hover {
        transform: translateY(0);
      }
    }
  }

  .contact-wrapper {
    position: relative;
    width: 400px;
    display: flex;
    justify-content: center;
  }

  .link {
    display: block;
    color: white;
    text-decoration: none;
    z-index: 3;
    position: relative;
  }

  .header-content {
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 10px;
  }

  .logo {
    transform: scale(0.8);
    margin-left: -20px;
  }
  .header-left {
    display: flex;
    flex-direction: row;
    img {
      margin: 0 auto;
    }
  }

  .nav-right {
    margin-top: 15px;
  }
  .header-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
  }

  p {
    color: white;
    margin: 0 auto;
    margin-bottom: 0;
  }

  a {
    text-decoration: none !important;
    color: white;
    transition: transform 0.25s;
    &:hover {
      transform: translateY(-2px);
    }
  }

  @media (max-width: 1425px) {
    padding-bottom: 1px;
    .header-container {
      flex-direction: column;
      justify-content: space-around;
      align-items: space-around;
      margin-bottom: 0;
    }
    .header-left {
      flex-direction: column-reverse;
    }
    .contact-buttons {
      display: flex;
      justify-content: space-between;
      .bars {
        display: none;
      }
    }
    .contact-wrapper {
      display: none;
    }
    .header-content {
      margin: 0 auto;
      padding: 0px;
    }
    .tagline {
      display: none;
    }
    .header-left {
      margin: 0 auto;
    }

    .nav-right {
      margin-top: -20px;
    }
  }

  @media (max-width: 600px) {
    position: relative;
    z-index: 1;
    a {
      &:hover {
        transform: translateY(0px);
      }
    }
    h1 {
      margin-bottom: 15px;
    }
    transition: height 0.2s ease;
    .contact-buttons {
      justify-content: space-between;
      width: 100%;
      .bars {
        width: 33%;
        background-color: #003153;
        display: block;
        cursor: pointer;
      }
    }

    .header-content {
      h1 {
        font-size: 8vw;
        margin-top: 20px;
      }
    }
  }
`;
const StyledNavContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 1.45rem;
  margin-right: 20px;
  width: 450px;
  font-family: Varela Round;

  @media (max-width: 1425px) {
    margin: 10px auto;
  }

  @media (max-width: 600px) {
    width: 100%;
    flex-direction: column;
    align-items: flex-start;
    display: ${props => (props.open ? 'block' : 'none')};
    opacity: ${props => (props.open ? '1' : '0')};
    transition: all 0.2s ease-out;
    margin: 2px auto;
    p {
      width: 99%;
    }

    .nav-item {
      text-align: center;
      margin: 1px auto;
      background-color: #003153;
      width: 94vw;
      text-decoration: none;
      color: white;
      text-shadow: 1px 1px 2px black;
    }
  }
  @media (max-width: 350px) {
    .nav-item {
      margin-left: 0;
    }
  }
`;

//---------End Styles--------------

export default Header;
