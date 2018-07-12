//This FeaturedProperties component initally took data from the OpenRETS API to use in the Site
//I'm keeping the component here for future use just in case
/*
import React, { Component } from 'react';
import styled from 'styled-components';
import { fetchAllProperties } from '../utils/api';
import PropertyCard from './PropertyCard';
import Slider from 'react-slick';

class FeaturedProperties extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loading: true,
      error: false
    };
  }

  componentDidMount() {
    fetchAllProperties().then(data => {
      if (data !== 'error') {
        this.setState({ data, loading: false });
      } else {
        this.setState({ error: true });
      }
    });
  }
  render() {
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
        { breakpoint: 1920, settings: { slidesToShow: 3 } }
      ]
    };
    return (
      <StyledContainer>
        <Heading>
          <h2>Featured Properties</h2>
        </Heading>
        {!this.state.loading && (
          <PropertiesContainer>
            <Slider {...settings}>
              {this.state.data.map(property => (
                <div>
                  <PropertyCard data={property} key={property.mlsId} />
                </div>
              ))}
            </Slider>
          </PropertiesContainer>
        )}
        {this.state.error && <p>Sorry, there seems to be an error</p>}
      </StyledContainer>
    );
  }
}


class FeaturedProperties extends Component {
  render() {
    return (
      <StyledContainer>
        <Heading>
          <h2>Featured Properties</h2>
        </Heading>
        <PropertiesContainer>
          <iframe
            src="https://las.mlsmatrix.com/Matrix/public/IDX.aspx?idx=d5cb599"
            width="105%"
            height="750"
          />
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
  @media (max-width: 920px) {
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
  @media (max-width: 920px) {
    border: none;
    background-color: inherit;
    top: 0;
    width: auto;
  }
`;

export default FeaturedProperties;
*/
