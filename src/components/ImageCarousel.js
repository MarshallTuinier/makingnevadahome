import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';
import Img from 'gatsby-image';

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
      <Img sizes={props.data.sliderImg5.sizes} />
      <Img sizes={props.data.sliderImg2.sizes} />
      <Img sizes={props.data.sliderImg3.sizes} />
      <Img sizes={props.data.sliderImg4.sizes} />>
      <Img sizes={props.data.sliderImg1.sizes} />
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
