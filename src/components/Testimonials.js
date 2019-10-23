import React from 'react'
import styled from 'styled-components'
import Wave from '../components/Wave'
import { theme } from '../components/Layout'

const Testimonials = () => {
  return (
    <Wrapper>
      <Main className="inner">
        <h2>Testimonials</h2>
        <div className="widget">
          <header className="header">What Clients are Saying...</header>
          <div id="reach150_content">
            <iframe
              src="https://reach150.com/widget/?userId=17747&amp;maxEntries=50&amp;maxChars=250&amp;bodyBgColor=ededed&amp;fontFamily=sans-serif&amp;headingFontSize=12&amp;bodyFontSize=12&amp;headingColor=4d4d4d&amp;bodyColor=333333&amp;linkColor=b40101&amp;showAnon=true"
              frameBorder="0"
              width="100%"
              height="342"
            ></iframe>
          </div>
          <footer className="footer">
            <a
              href="https://reach150.com/m/review/17747/keller-williams-realty-south-west-david-hofer-las-vegas-nv-real-estate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                alt="Powered by Reach150"
                src="https://reach150.com/img/common/powered-by-16.png"
              />
            </a>
          </footer>
        </div>
      </Main>
      <Wave color={theme.lightGrey} />
    </Wrapper>
  )
}

const Main = styled.div`
  width: 100%;
  margin-top: -10rem;
  color: ${({ theme }) => theme.offWhite};
  min-height: 775px;
  position: relative;
  z-index: 1;
  text-align: center;
  background-color: ${({ theme }) => theme.black};
  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    height: 100%;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 4rem;
  }

  .header {
    padding: 8px 2px;
    text-align: center;
    color: ${({ theme }) => theme.offWhite};
    background-color: ${({ theme }) => theme.darkGrey};
    font-weight: bold;
    font-size: 15px;
  }

  .widget {
    width: 85vw;
    max-width: ${({ theme }) => theme.maxWidth};
    border: 1px solid ${({ theme }) => theme.darkGrey};
    margin: 0 auto;
  }

  .footer {
    text-align: right;
    background-color: #4d4d4d;
    height: 16px;
    padding: 4px;

    img {
      border: 0;
    }
  }
`

const Wrapper = styled.div`
  min-height: 600px;
  position: relative;
`

export default Testimonials
