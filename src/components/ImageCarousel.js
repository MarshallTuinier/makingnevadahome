import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import sliderImg1 from '../assets/sliderImg1.jpg';
import sliderImg2 from '../assets/sliderImg2.jpg';
import sliderImg3 from '../assets/sliderImg3.jpg';
import sliderImg4 from '../assets/sliderImg4.jpg';
import sliderImg5 from '../assets/sliderImg5.jpg';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import styled from 'styled-components';

const ImageCarousel = () => (
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
      <div className="img">
        <img src={sliderImg5} />
      </div>
      <div>
        <img src={sliderImg2} />
      </div>
      <div>
        <img src={sliderImg3} />
      </div>
      <div>
        <img src={sliderImg4} />>
      </div>
      <div>
        <img src={sliderImg1} />
      </div>
    </Carousel>
  </StyledContainer>
);

const StyledContainer = styled.div`
  position: absolute;
  z-index: -1;
  .img {
    background-color: white !important;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;
export default ImageCarousel;
