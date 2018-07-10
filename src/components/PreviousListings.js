import React, { Component } from 'react';
import styled from 'styled-components';
import PropertyCard from './PropertyCard';
import Slider from 'react-slick';
import goldenSedrum from '../assets/goldenSedrum.jpg';
import bumblebee from '../assets/bumblebee.jpg';
import greenValley from '../assets/greenValley.jpg';

class PreviousListings extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const propertyArray = [
      {
        address: '736 Golden Sedum Drive, Henderson, NV 89011',
        name: 'goldenSedrum',
        photo: goldenSedrum,
        price: '$325,000',
        length: '',
        beds: '4',
        baths: '3'
      },
      {
        address: '4661 Bumblebee Circle, Las Vegas, NV 89122',
        name: 'bumblebee',
        photo: bumblebee,
        price: '$325,000',
        length: '',
        beds: '4',
        baths: '3'
      },
      {
        address: '251 S. Green Valley Parkway #611, Henderson, NV 89012',
        name: 'greenValley',
        photo: greenValley,
        price: '$325,000',
        length: '',
        beds: '4',
        baths: '3'
      }
    ];
    const settings = {
      slidesToShow: 4,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 4000,
      infinite: true,
      swipeToSlide: true,
      responsive: [
        { breakpoint: 930, settings: { slidesToShow: 1 } },
        { breakpoint: 1450, settings: { slidesToShow: 2, centerMode: false } },
        { breakpoint: 1900, settings: { slidesToShow: 3 } }
      ]
    };

    return (
      <StyledContainer>
        <Heading>
          <h2>Previous Listings</h2>
        </Heading>
        <PropertiesContainer>
          <Slider {...settings}>
            {propertyArray.map(property => (
              <div>
                <PropertyCard data={property} />
              </div>
            ))}
          </Slider>
        </PropertiesContainer>
      </StyledContainer>
    );
  }
}

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 350px;
  background-color: #20ace1;
  color: white;
  text-align: center;
  text-shadow: 1px 1px 2px black;

  h2 {
    margin-top: 20px;
  }
`;

const PropertiesContainer = styled.div`
  height: 100%;
  width: 95%;
  padding: 0px;
  margin: 0 auto;
  margin-bottom: 80px;
  display: flex;
  * {
    min-height: 0;
    min-width: 0;
  }
  @media (max-width: 900px) {
    margin-bottom: 20px;
  }
`;

const Heading = styled.div`
  margin: 0 auto;
  position: relative;
  width: 20em;
  height: 100px;
  background-color: #003153;
  display: flex;
  align-items: center;
  justify-content: space-around;
  top: -50px;
  border: 0.5px solid white;
  @media (max-width: 900px) {
    border: none;
    background-color: inherit;
    top: 0;
    width: auto;
  }
`;

export default PreviousListings;
