import React from "react";
import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import styled from "styled-components";

const ImageCarousel = props => (
  <StyledContainer>
    <Carousel
      infiniteLoop
      autoPlay
      interval={8500}
      showArrows={false}
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      transitionTime={2000}
    >
      <img src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1535568848/makingnevadahome/sliderImg5.jpg" />
      <img src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1535568848/makingnevadahome/sliderImg1.jpg" />
      <img src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1535568848/makingnevadahome/sliderImg3.jpg" />
      <img src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1535568848/makingnevadahome/sliderImg4.jpg" />
      <img src="https://res.cloudinary.com/dgt29ucc1/image/upload/v1535568848/makingnevadahome/sliderImg2.jpg" />
    </Carousel>
  </StyledContainer>
);

const StyledContainer = styled.div`
  width: 100%;
  position: absolute;
  z-index: -1;

  @media (max-width: 920px) {
    display: none;
  }
`;
export default ImageCarousel;
