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
      <aside className="inner">
        <div className="textContainer">
          <p>
            We're proud to call ourselves The Hofer Torti Group. We guarantee
            exceptional and personalized service, and understand that your
            decision to buy or sell a home comes after a long process of
            analyzing, reflecting, dreaming and number-crunching. We will not
            take your journey lightly. We will always be on hand to lend you the
            support you need in any stage--whether in home viewing, staging,
            looking for the right mortgage or closing the deal. As an
            experienced real estate team , we have the independence to explore
            all the available tools to successfully market your property or help
            you find your dream home. Call us today and let us show you what The
            Hofter Torti Group has to offer.
          </p>
        </div>
      </aside>
      <Wave />
    </TopSection>
    <AboutSection>
      <div className="inner">
        <h2>Who We Are</h2>
        <CardContainer>
          <article>
            <div className="imageContainer">
              <img src={finding} alt="" />
            </div>
            <div className="info">
              <h3>Finders</h3>
              <p>
                Our collective experience allows us to provide you with the
                guidance you need to make the right decisions on chosing a new
                home. Let our extensive knowledge help you find the perfect
                house that you can call a home.
              </p>
            </div>
          </article>
          <article>
            <div className="imageContainer">
              <img src={selling} alt="" />
            </div>
            <div className="info">
              <h3>Sellers</h3>
              <p>
                When it comes to listing a house, many real estate companies
                will just "set-it-and-forget-it". Not us. Here at The Hofer
                Torti Group, we are determined to ensure that your listed
                property gets the top dollar that you deserve.
              </p>
            </div>
          </article>
          <article>
            <div className="imageContainer">
              <img src={building} alt="" />
            </div>
            <div className="info">
              <h3>Makers</h3>
              <p>
                We don't just want to help you locate a house, we want to help
                you make that house into a home. Our personalized touch will
                give you that cozy, at-home feeling when we find your dream
                property. <Link to="/contactUs">Give us a call</Link> today and
                let us Make Nevada Home for you!
              </p>
            </div>
          </article>
        </CardContainer>
      </div>
      <Wave color={theme.black} />
    </AboutSection>
    <Testimonials />
    <Communities />
  </Layout>
)

// -------------------- Styles -------------------- //
const TopSection = styled.section`
  background-color: ${({ theme }) => theme.black};
  min-height: 575px;
  position: relative;
  z-index: 1;

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

  &::after {
    content: '';
    display: block;
    position: absolute;
    z-index: 0;
    background: radial-gradient(
      ${({ theme }) => theme.red} 2.18%,
      ${({ theme }) => theme.black} 73.53%
    );
    height: 150%;
    right: 0;
    top: 10rem;
    width: 1500px;
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
