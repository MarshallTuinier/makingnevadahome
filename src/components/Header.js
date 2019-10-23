import React, { useState } from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = () => {
  const [sidebarVisible, setSidebarVisibility] = useState(false)

  const handleClick = () => {
    setSidebarVisibility(v => !v)
  }

  return (
    <StyledHeader sidebarVisible={sidebarVisible}>
      <div className="inner">
        <nav>
          <div className="logoContainer">
            <Link className="mnh" to="/">
              making<span className="uppercase">nevada</span>home
            </Link>
            <Link to="/">
              <Logo
                src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1568248801/makingnevadahome/kw.png"
                alt="Keller Williams Southwest Realty Logo"
              />
            </Link>
          </div>
          <button aria-label="Open Mobile Menu" onClick={handleClick}>
            <Bar1 sidebarVisible={sidebarVisible} />
            <Bar2 sidebarVisible={sidebarVisible} />
            <Bar3 sidebarVisible={sidebarVisible} />
          </button>
          <div className="overlay" aria-hidden onClick={handleClick} />
          <ul>
            <Link className="mobileOnly" to="/">
              Home
            </Link>
            <Link to="/about">About</Link>
            <Link to="/currentListings">Current Listings</Link>
            <Link to="/homeSearch">Home Search</Link>
            <Link to="/contactUs">Contact</Link>
          </ul>
        </nav>
      </div>
    </StyledHeader>
  )
}

// -------------------- Styles -------------------- //

const StyledHeader = styled.header`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 0 1rem 1rem;
  margin-bottom: 4rem;
  background-color: ${({ theme }) => theme.black};
  nav {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 2rem;
    color: ${({ theme }) => theme.lightGrey};

    button {
      border: none;
      background-color: inherit;
      position: relative;
      z-index: 2;
      padding: 2rem;
      right: 0;
      display: none;
      @media screen and (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
        display: block;
      }
    }

    ul {
      display: flex;
      justify-content: space-between;

      a {
        padding: 1rem;
        color: ${({ theme }) => theme.lightGrey};
      }
    }

    @media screen and (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
      ul {
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        transition: transform 0.25s linear;
        transform: ${({ sidebarVisible }) =>
          sidebarVisible ? 'translate3d(0,0,0)' : 'translate3d(100%,0,0)'};
        width: 70%;
        height: 100vh;
        flex-direction: column;
        justify-content: flex-start;
        background-color: ${({ theme }) => theme.black};
        a {
          flex-grow: 0;
        }
      }
    }
  }
  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    margin-bottom: 3rem;
  }
  .logoContainer {
    display: flex;
    align-items: center;
    @media screen and (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
      width: 100%;
      justify-content: space-around;
    }
  }

  .uppercase {
    text-transform: uppercase;
  }

  .mnh {
    font-size: 3.5rem;
    color: ${({ theme }) => theme.lightGrey};
    @media screen and (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
      font-size: 2.5rem;
    }
    @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
      font-size: 2rem;
    }
  }

  .overlay {
    display: ${({ sidebarVisible }) => (sidebarVisible ? 'block' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }

  .mobileOnly {
    display: none;
    @media screen and (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
      display: initial;
    }
  }
`

const Logo = styled.img`
  width: 200px;
  margin: 1rem 1rem 1rem 2rem;

  @media screen and (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    width: 125px;
  }
`
const Bar = styled.div`
  width: 35px;
  height: 5px;
  background-color: ${({ theme }) => theme.lightGrey};
  margin: 6px 0;
  transition: 0.4s;
`

const Bar1 = styled(Bar)`
  ${({ sidebarVisible }) =>
    sidebarVisible &&
    `
      -webkit-transform: rotate(-45deg) translate(-9px, 6px);
      transform: rotate(-45deg) translate(-9px, 6px);
    `}
`

const Bar2 = styled(Bar)`
  ${({ sidebarVisible }) => sidebarVisible && `opacity: 0;`}
`

const Bar3 = styled(Bar)`
  ${({ sidebarVisible }) =>
    sidebarVisible &&
    `
      -webkit-transform: rotate(45deg) translate(-8px, -8px);
      transform: rotate(45deg) translate(-8px, -8px);
    `}
`

export default Header
