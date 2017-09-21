import React from 'react';
import styled from 'styled-components';
import JBAbout from '../assets/JBAbout.png';
import DHAbout from '../assets/DHAbout.png';
import UnderNavImg from '../components/UnderNavImg';
import HR from '../components/HR';
const About = props => {
  return (
    <div className={props.className}>
      <UnderNavImg />
      <StyledPage>
        <h1>About</h1>
        <HR />
        <BioContainer>
          <img src={JBAbout} alt="Jason Brown Realtor" />
          <h2>Jason Brown</h2>
          <p>
            Jason Brown brings integrity, energy, hard work and dedication into
            every aspect of your real estate needs. Originally from the Bay Area
            of California, Jason relocated to the Las Vegas Area in 2000. Having
            been involved in the real estate and mortgage industry over the past
            13 years, Jason’s understanding of the Valley and its continued
            growth is unparalleled. He has been trained and inspired in sales by
            some of the best in the business, and his mission to meet the goals
            of his clients is overshadowed only by his passion for helping
            people. Outside of his career, Jason devotes most of his time to his
            wife Holly and their three children. He is an avid golfer and soccer
            player and enjoys various other outdoor activities Southern Nevada
            has to offer.
          </p>
        </BioContainer>
        <HR />
        <BioContainer>
          <img src={DHAbout} alt="David Hofer Realtor" />
          <h2>David Hofer</h2>
          <p>
            My name is David Hofer and I have been a real estate appraiser for
            the past 27+ years and owned my own appraisal business in the Las
            Vegas Valley area for the past 19 years. Although retired from the
            Appraisal business since 2012, I still keep up with what’s going on
            in the industry and keep my knowledge of the market and skills sharp
            to benefit my Buyer and Seller clients.
            <br />
            <br />
            I work for you. I am here to help you find a home you love or an
            investment property to generate revenue and will do what I can to
            help you get it. I will help you every step of the way and guide you
            through the process which is what you should expect from your
            Realtor.
            <br />
            <br />
            Throughout the years, people have asked many times if I knew a good
            real estate agent to buy or sell a home and I would always refer
            them out. One day a light came on and it occurred to me that I
            should be referring them to me. That way, I could make sure my
            client was taken care of with their best interest in mind and have
            someone with more extensive knowledge of the market whether they
            were selling, buying or an investor. I listen to my clients’ wants,
            needs, and desires and take my time to do the research for them
            using my extensive market knowledge to their best benefit with
            follow through and frequent communication.
          </p>
        </BioContainer>
        <HR />
        <BioContainer>
          <h2>The Team</h2>
          <p>
            As full-service realtors serving the Las Vegas area, we will
            represent you at every stage of the home buying or selling process,
            and ensure the outcome is favorable for everyone concerned.
            <br />
            <br />
            When you choose us to be your representatives, we will provide
            comprehensive service to relieve you of much of the stress that
            typically comes with a real estate transaction.
            <br />
            <br />
            As full-service realtors, we can manage much of the details involved
            in a transaction including home inspections, finding a lender,
            settling title issues and so much more. Let us know what your
            concerns are and we will work with you in finding the best solutions
            for them.
            <br />
            <br />
            <b>Our Experience is Our Asset</b>
            <br />
            <br />
            Our collective experience of more than 40 years allows us to provide
            you with the guidance you need to make the right decisions.
            <br />
            <br />
            Jason has been engaged in the real estate and mortgage industry for
            more than 13 years, and Dave had been a real estate appraiser in the
            Las Vegas valley for more than 27 years.
            <br />
            <br />
            This has helped us to be knowledgeable in every step of the home
            buying and selling process, from finding the right mortgage to
            conducting a market analysis to closing. We bank on this experience
            to help our clients avoid any misstep that could cost them a lot of
            money and opportunities.
            <br />
            <br />
            We will handle the nitty-gritty details to make the process more
            enjoyable for you, and more importantly, to protect your investment.
            We stake our reputation on the satisfaction of our clients. This
            motivates us to work hard to get you the best outcome possible.
          </p>
        </BioContainer>
        <HR />
      </StyledPage>
    </div>
  );
};

const StyledPage = styled.div`
  max-width: 1200px;
  margin: 20px auto;
  padding-left: 20px;
  img {
    height: 229px;
    width: 159px;
    margin: 0 20px 0 0;
    float: left;
    clear: right;
  }
  @media (max-width: 600px) {
    margin: 0 auto;
    margin-left: 10px;
    padding-left: 0;
    h1 {
      text-align: center;
    }
    img {
      margin: 20px;
    }
  }
`;

const BioContainer = styled.div`
  max-width: 800px;
  @media (max-width: 600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default About;
