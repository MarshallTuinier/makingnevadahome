import React from 'react';
import styled from 'styled-components';

const Testimonials = () => {
  return (
    <StyledContainer>
      <Heading>
        <h2>Testimonials</h2>
      </Heading>
      <div className="effect" />
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
  @media (max-width: 920px) {
    height: 100%;
  }
  .effect {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
  }

  h2 {
    margin-top: 1.5rem;
    z-index: 1;
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
