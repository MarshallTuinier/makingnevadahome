import React, { Component } from 'react'
import Helmet from 'react-helmet'
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components'
import Header from './Header'
import Footer from './Footer'

export default class Page extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledPage>
          <Helmet
            title="The Hofer Torti Group | Making Nevada Home"
            meta={[
              {
                name: 'Making Nevada Home | The Hofer Torti Group',
                content: 'Number 1 in Las Vegas Valley Real Estate',
              },
              {
                name: 'keywords',
                content:
                  'Making Nevada Home, Las Vegas, Vegas, Henderson, Southern Neava, Real Estate, Home, Home Buying, Real, Estate',
              },
            ]}
            link={[
              {
                rel: 'shortcut icon',
                type: 'image/png',
                href:
                  'https://res.cloudinary.com/dgt29ucc1/image/upload/v1535568850/makingnevadahome/favicon.png',
              },
            ]}
          />
          <GlobalStyle />
          <Header />
          <div className="fancy inner" />
          <main>{this.props.children}</main>
        </StyledPage>
      </ThemeProvider>
    )
  }
}

// -------------------- Styles -------------------- //

export const theme = {
  darkRed: '#9f0101',
  red: '#b40101',
  black: '#111',
  grey: '#4D4D4D',
  lightGrey: '#AFAFAF',
  darkGrey: '#252525',
  offWhite: '#EDEDED',
  white: '#f4f7f8',
  accent: '#01b4b4',
  maxWidth: '1400px',
  blue: '#002349',
  boxShadow: '0 12px 24px 0 rgba(0,0,0, 0.09)',
  mobileBreakpoint: '650px',
  tabletBreakpoint: '1150px',
  desktop: '1151px',
}

const StyledPage = styled.div`
  background: ${({ theme }) => theme.black};
  color: ${({ theme }) => theme.black};
  position: relative;
  .fancy {
    &::before {
      background-image: linear-gradient(
        -90deg,
        rgba(14, 30, 37, 0) 0,
        ${({ theme }) => theme.white} 5%,
        ${({ theme }) => theme.white} 90%,
        rgba(14, 30, 37, 0) 100%
      );
      content: '';
      display: block;
      margin: 0 auto;
      height: 2px;
      opacity: 0.2;
      position: absolute;
      bottom: 0;
      width: 100%;
      max-width: ${({ theme }) => theme.maxWidth};
      top: 9rem;
      @media screen and (max-width: ${({ theme }) => theme.maxWidth}) {
        left: 0;
      }
    }
  }

  main {
    min-height: calc(100vh - 400px);
  }
`

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    min-height: 100vh;
    background-color: ${({ theme }) => theme.black};
    max-width: 100vw;
    overflow-x: hidden;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    min-height: 100vh;
    font-size: 1.5rem;
    line-height: 1.618;
    font-family: "Karla", -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  h1, h2, h3, h4, h5 {
    font-family: "Rubik";
    margin: 1rem 0;
  }

  h1 {
    font-size: 3.5rem;
  }

  a {
    text-decoration: none;
    color: ${theme.black};
  }

  ul {
    list-style: none;
    margin: 0;
  }

  .inner {
    max-width: ${({ theme }) => theme.maxWidth};
    margin: 0 auto;
    padding: 0 3rem;
  }

  .fancy {
    &::before {
      background-image: linear-gradient(
        -90deg,
        rgba(14, 30, 37, 0) 0,
        ${({ theme }) => theme.white} 5%,
        ${({ theme }) => theme.white} 90%,
        rgba(14, 30, 37, 0) 100%
      );
      content: '';
      display: block;
      margin: 0 auto;
      height: 2px;
      opacity: 0.2;
      position: absolute;
      width: 100%;
      max-width: ${({ theme }) => theme.maxWidth};
      top: 9rem;
    }
  }

  .fancyAfter {
    position: relative;
    padding-bottom: 2rem;
    margin-bottom: 2rem;
    &::after {
      background-image: linear-gradient(
        -90deg,
        rgba(14, 30, 37, 0) 0,
        ${({ theme }) => theme.white} 5%,
        ${({ theme }) => theme.white} 90%,
        rgba(14, 30, 37, 0) 100%
      );
      content: '';
      display: block;
      margin: 0 auto;
      height: 2px;
      opacity: 0.2;
      position: absolute;
      width: 100%;
      max-width: ${({ theme }) => theme.maxWidth};
      bottom: 0;
    }
  }
`
