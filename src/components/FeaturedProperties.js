import React, { Component } from "react";
import styled from "styled-components";
import { fetchAllProperties } from "../utils/api";
import PropertyCard from "./PropertyCard";
import Slider from "react-slick";

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
      if (data !== "error") {
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
      autoplaySpeed: 5000,
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
        <h2>Featured Properties</h2>
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
  width: 90%;
  padding: 20px;
  margin: 0 auto;
  display: flex;
  * {
    min-height: 0;
    min-width: 0;
  }
`;

export default FeaturedProperties;
