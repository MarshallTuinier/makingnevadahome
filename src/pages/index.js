import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

import Layout from '../components/Layout'
import Wave from '../components/Wave'
import building from '../svg/building.svg'
import finding from '../svg/finding.svg'
import selling from '../svg/selling.svg'
import { theme } from '../components/Layout'
import Communities from '../components/Communities'
import Testimonials from '../components/Testimonials'

const IndexPage = () => (
  <Layout>
    <ScreenReadersOnly>Making Nevada Home</ScreenReadersOnly>
    <Logo>
      <img
        className="logo"
        alt="The Hofer Torti Group Logo"
        src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1571805190/makingnevadahome/thtg.png"
      />
    </Logo>
    <TopSection>
      <h2>UNDER CONSTRUCTION</h2>
    </TopSection>
  </Layout>
)

// -------------------- Styles -------------------- //
const TopSection = styled.section`
  background-color: ${({ theme }) => theme.black};
  min-height: 575px;
  position: relative;
  z-index: 1;

  h2 {
    font-size: 50px;
    color: white;
    text-align: center;
  }

  aside {
    position: relative;
    z-index: 1;
    text-align: left;
  }

  p {
    font-size: 2rem;
    margin: 4rem 0;
    color: ${({ theme }) => theme.lightGrey};
  }

  .textContainer {
    max-width: 600px;
    margin: 0 auto;
  }

  @media (max-width: ${({ theme }) => theme.mobileBreakpoint}) {
    p {
      font-size: 1.7rem;
    }
  }
`

const AboutSection = styled.section`
  background-color: ${({ theme }) => theme.offWhite};
  position: relative;
  z-index: 1;
  margin-top: -10rem;
  text-align: center;
  padding-bottom: 25rem;

  h2 {
    font-size: 4rem;
  }

  article {
    width: 325px;
  }

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    padding-bottom: 13rem;
  }
`

const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;

  h3 {
    font-size: 3.3rem;
    margin-top: 3rem;
  }

  article {
    text-align: left;
  }

  a {
    color: ${({ theme }) => theme.red};
  }

  .imageContainer {
    height: 150px;

    img {
      width: 100%;
    }
  }

  .info {
    margin: 0 2rem;

    p {
      margin: 0;
    }
  }

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    flex-direction: column;
    article {
      margin: 1rem auto 6rem;
    }
  }
`

const ScreenReadersOnly = styled.h1`
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
`

const Logo = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;

  img {
    width: 100%;
  }
`

export default IndexPage
