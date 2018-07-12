import React from 'react';
import styled from 'styled-components';
import communitiesImg from '../assets/communitiesImg.jpg';
import CommunityButton from './CommunityButton';
import linen from '../assets/linen.png';

const Communities = () => {
  const communityList = [
    'HENDERSON',
    'SUMMERLIN',
    'SOUTH WEST',
    'LAS VEGAS',
    'BOULDER CITY',
    'NORTH LAS VEGAS',
    'NORTH WEST'
  ];
  return (
    <StyledContainer>
      <Heading>
        <h2>Communities</h2>
      </Heading>
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
  height: 400px;
  color: white;
  text-align: center;
  background-color: #003153;
  background-image: url(${linen});
  text-shadow: 1px 1px 2px black;
  @media (max-width: 920px) {
    height: 100%;
  }

  h2 {
    margin-top: 1.5rem;
    z-index: 1;
  }
`;

const CommunitiesWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 920px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  @media (max-width: 920px) {
    flex-direction: column;
    height: 425px;
    padding-bottom: 3px;
    justify-content: space-between;
  }
`;

const Heading = styled.div`
  margin: 0 auto;
  position: relative;
  width: 20em;
  height: 100px;
  color: white;
  background-color: #003153;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: -50px;
  border: 0.5px solid white;
  text-shadow: none;
  @media (max-width: 920px) {
    border: none;
    background-color: inherit;
    top: 0;
    color: white;
    text-shadow: 1px 1px 2px black;
    width: auto;
  }
`;

export default Communities;
