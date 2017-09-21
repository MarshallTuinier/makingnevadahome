import React from 'react';
import styled from 'styled-components';
import DavidHofer from '../assets/DavidHofer.png';
import JasonBrown from '../assets/JasonBrown.png';

const AgentInfo = () => {
  return (
    <StyledContainer>
      <div className="agent-bar">
        <img className="agent-photo jason" src={JasonBrown} />
        <div className="description">
          <h2>Las Vegas Valley Real Estate</h2>
          <p>
            We're proud to call ourselves a boutique real estate company. As
            such, we guarantee exceptional and personalized service. We
            understand that your decision to buy or sell a home comes after a
            long process of analyzing, reflecting, dreaming and
            number-crunching. We will not take your journey lightly. We will
            always be on hand to lend you the support you need in any
            stage--whether in home viewing, staging an open house, looking for
            the right mortgage or closing the deal. As a boutique real estate
            company, we have the independence to explore all the available tools
            to successfully market your property or help you find your dream
            home. We won't hesitate to tailor our services to better suit your
            unique situation.
          </p>
        </div>
        <img className="agent-photo david" src={DavidHofer} />
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 40.1vw;
  justify-content: flex-end;
  text-align: center;
  position: relative;
  text-shadow: 1px 1px 2px black;

  .agent-photo {
    display: inline-block;
    position: absolute;
    bottom: 0;
    padding: 0;
    margin: 0px;
    height: calc(298px * 1.3);
    width: calc(305px * 1.3);
  }
  .jason {
    left: 10vw;
  }
  .david {
    right: 10vw;
  }
  .description {
    display: block;
    width: 680px;
    margin: 0 auto;
    text-align: center;
    padding-top: 11vw;
    font-size: 23px;
  }
  .agent-bar {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    text-shadow: 1px 1px 2px #000;
  }
  h2 {
    font-size: 40px;
  }
  @media (max-width: 1700px) {
    .jason {
      left: 0;
    }
    .david {
      right: 0;
    }
  }
  @media (max-width: 1500px) {
    .jason {
      height: 298px;
      width: 305px;
    }
    .david {
      height: 298px;
      width: 305px;
    }
    .description {
      padding-top: 30px;
      font-size: 16px;
      width: 550px;
    }
  }
  @media (max-width: 1000px) {
    h2 {
      font-size: 25px;
    }
    .agent-bar {
      height: 100%;
    }
    .agent-photo {
      display: none;
    }
  }
  @media (max-width: 900px) {
    height: auto;
    .agent-bar {
      background-color: white;
      text-shadow: none;
      color: black;
      height: auto;
    }
    .description {
      width: 100%;
      padding: 10px 20px;
    }
    h2 {
      font-size: 25px;
    }
  }
`;
export default AgentInfo;
