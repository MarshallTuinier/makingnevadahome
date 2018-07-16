import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <StyledContainer>
      <Heading>
        <h2>Testimonials</h2>
      </Heading>
      <div className="effect" />
      <div className="top-left">
        <div className="quote-left">&ldquo;</div>
        <div className="review-left">
          David Hofer has proven to be THE BEST REAL ESTATE AGENT I've met and
          dealt with: Not only knowledgeable and friendly in his profession, he
          has spent more than necessary time and effort in helping his client
          with good guidance, advice and needy references. If anyone I know of
          and members of my family are in need of a good, trustworthy r/e broker
          in the Las Vegas, Henderson NV areas I will not ever hesitate to
          recommend this great guy.
          <br />
          <br />
          -Instert Name, 2018
        </div>
        <div className="quote-right">&rdquo;</div>
      </div>
      <div className="bottom-right">
        <div className="quote-left">&ldquo;</div>
        <div className="review-right">
          David did for us in about three weeks what our last realtor couldn’t
          do in nine months. He was never out of reach—whether by e-mail, text,
          or phone call—throughout the entire buying process. David is a master
          of his craft, and we would use him again to buy or sell in a
          heartbeat.
          <br />
          <br />
          -Insert Name, 2017
        </div>
        <div className="quote-right">&rdquo;</div>
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  position: relative;
  width: 100%;
  height: 800px;
  color: white;
  text-align: center;
  background-color: black;
  background-image: url(https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Las_Vegas_Strip_panorama.jpg/1280px-Las_Vegas_Strip_panorama.jpg);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  text-shadow: 1px 1px 2px black;

  .effect {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  .top-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 400px;
    height: 500px;
    margin: 50px;
    margin-left: 10vw;
  }
  .bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
    width: 400px;
    height: 500px;
    margin: 50px;
    margin-right: 10vw;
  }

  .quote-left {
    position: absolute;
    top: 0;
    left: 0;
    margin-top: 100px;
    font-size: 100px;
  }
  .quote-right {
    position: absolute;
    bottom: 0;
    right: 0;
    font-size: 100px;
  }
  .review-left {
    display: block;
    margin-top: 120px;
    margin-left: 20px;
    font-family: Varela Round;
  }

  .review-right {
    display: block;
    margin-top: 160px;
    margin-left: 20px;
    font-family: Varela Round;
  }

  h2 {
    margin-top: 1.5rem;
    z-index: 1;
  }

  .content {
    width: 100%;
    height: 100%;
    margin-top: -100px;
  }

  .left {
    width: 50vw;
    height: 100%;
  }

  .right {
    width: 50vw;
    height: 100%;
  }

  @media (max-width: 1000px) {
    background-image: none;
    height: 100%;

    .quote-left {
      display: none;
    }

    .quote-right {
      display: none;
    }

    .top-left {
      position: relative;
      width: 100%;
      margin: 0 auto;
      height: auto;
      padding: 0 10px;
    }

    .bottom-right {
      position: relative;
      width: 100%;
      margin: 0 auto;
      height: auto;
      margin-top: 40px;
      padding: 0 10px;
    }

    .review-left {
      width: 100%;
      margin: 20px auto;
    }

    .review-right {
      width: 100%;
      margin: 20px auto;
    }
  }
`;

const Heading = styled.div`
  margin: 0 auto;
  position: relative;
  width: 20em;
  height: 100px;
  color: white;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: -50px;
  border: 0.5px solid white;
  text-shadow: none;
  z-index: 2;
  @media (max-width: 920px) {
    border: none;
    background-color: inherit;
    top: 0;
    color: white;
    text-shadow: 1px 1px 2px black;
    width: auto;
  }
`;

export default Testimonials;
