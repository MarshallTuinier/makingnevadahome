import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const About = () => {
  return (
    <Layout>
      <StyledPage className="inner">
        <h1>About the Hofer Torti Group</h1>
        <BioContainer className="fancyAfter">
          <img
            src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1570333975/makingnevadahome/dave.jpg"
            alt="David Hofer Realtor"
          />
          <h2>David Hofer</h2>
          <div>
            <p>
              My name is David Hofer and I have been a real estate appraiser for
              the past 25 years and owned my own appraisal business in the Las
              Vegas Valley area for 19 years, combined with 10 years of real
              estate experience. Although retired from the Appraisal business
              since 2012, I still keep up with what’s going on in the industry
              and keep my knowledge of the market and skills sharp to benefit my
              Buyer and Seller clients.
            </p>
            <p>
              I work for you. I am here to help you find a home you love or an
              investment property to generate revenue and will do what I can to
              help you get it. I will help you every step of the way and guide
              you through the process which is what you should expect from your
              Realtor.
            </p>
            <p>
              Throughout the years, people have asked many times if I knew a
              good real estate agent to buy or sell a home and I would always
              refer them out. One day a light came on and it occurred to me that
              I should be referring them to me. That way, I could make sure my
              client was taken care of with their best interest in mind and have
              someone with more extensive knowledge of the market whether they
              were selling, buying or an investor. I listen to my clients’
              wants, needs, and desires and take my time to do the research for
              them using my extensive market knowledge to their best benefit
              with follow through and frequent communication.
            </p>
          </div>
        </BioContainer>
        <BioContainer className="fancyAfter">
          <img
            src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1535568852/makingnevadahome/bob.jpg"
            alt="Robert Torti Realtor"
          />
          <h2>Robert Torti</h2>
          <p>
            Robert Torti has a career in entertainment that spans over 40 years,
            from Broadway to Television. His Broadway credits include his
            Tony-nominated performance in "Starlight Express", "Joseph and the
            Amazing Technicolor Dreamcoat", and "Reefer Madness: The Musical".
            On the screen, Robert can be seen in such films as "That Thing You
            Do", "She's the Man", "Race to Witch Mountain", and "The Game Plan",
            as well as the host of CNBC's "The Filthy Rich Guide".
          </p>
          <p>
            Now with Keller Williams Realty Southwest and The Hofer Torti Group,
            Robert is taking his talents from the screen and the stage, ensuring
            all of his clients are able to make Nevada home.
          </p>
        </BioContainer>
        <BioContainer>
          <h2>The Team</h2>
          <div>
            <p>
              As full-service realtors serving the Las Vegas area, we will
              represent you at every stage of the home buying or selling
              process, and ensure the outcome is favorable for everyone
              concerned. When you choose us to be your representatives, we will
              provide comprehensive service to relieve you of much of the stress
              that typically comes with a real estate transaction. We are able
              to manage much of the details involved in a transaction including
              home inspections, finding a lender, settling title issues and so
              much more. Let us know what your concerns are and we will work
              with you in finding the best solutions for them.
            </p>

            <h3>Our Experience is Our Asset</h3>
            <p>
              Our collective experience allows us to provide you with the
              guidance you need to make the right decisions. This has helped us
              to be knowledgeable in every step of the home buying and selling
              process, from finding the right mortgage to conducting a market
              analysis to closing. We bank on this experience to help our
              clients avoid any misstep that could cost them a lot of money and
              opportunities. We will handle the nitty-gritty details to make the
              process more enjoyable for you, and more importantly, to protect
              your investment. We stake our reputation on the satisfaction of
              our clients. This motivates us to work hard to get you the best
              outcome possible.
            </p>
          </div>
        </BioContainer>
      </StyledPage>
    </Layout>
  )
}

const StyledPage = styled.div`
  color: ${({ theme }) => theme.lightGrey};
  padding: 0 2rem;
  img {
    height: 229px;
    width: 159px;
    margin: 0 2rem 1rem 0;
    float: left;
    clear: right;

    @media screen and (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
      margin: 0;
    }
  }

  p {
    margin: 2rem 0;
    font-size: 17px;
  }

  h3 {
    margin-top: 4rem;
  }
`

const BioContainer = styled.div`
  clear: both;
  position: relative;

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`

export default About
