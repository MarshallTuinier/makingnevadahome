import React from "react";
import styled from "styled-components";
import communitiesImg from "../assets/communitiesImg.jpg";
import CommunityButton from "./CommunityButton";

const Communities = () => {
  const communityList = [
    "HENDERSON",
    "SUMMERLIN",
    "SOUTH WEST",
    "LAS VEGAS",
    "BOULDER CITY",
    "NORTH LAS VEGAS",
    "NORTH WEST"
  ];
  return (
    <StyledContainer>
      <h2>Communities</h2>
      <CommunitiesWrapper>
        {communityList.map(city => (
          <CommunityButton key={city}>{city}</CommunityButton>
        ))}
      </CommunitiesWrapper>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: 100%;
  height: 300px;
  color: white;
  text-align: center;
  background-color: #003153;
  text-shadow: 1px 1px 2px black;
  @media (max-width: 900px) {
    height: 100%;
  }

  h2 {
    margin-top: 1.5rem;
    z-index: 1;
  }
`;

const CommunitiesWrapper = styled.div`
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  max-width: 900px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  @media (max-width: 900px) {
    flex-direction: column;
    height: 425px;
    padding-bottom: 3px;
    justify-content: space-between;
  }
`;

export default Communities;
