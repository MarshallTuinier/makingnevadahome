import React, { Component } from "react";
import styled from "styled-components";
import { fetchAllProperties } from "../utils/api";
import PropertyCard from "./PropertyCard";

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
    return (
      <StyledContainer>
        <h2>Featured Properties</h2>
        {!this.state.loading && (
          <PropertiesContainer>
            {this.state.data.map(property => (
              <PropertyCard data={property} key={property.mlsId} />
            ))}
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
  padding: 0 0 30px 0;
  height: 100%;
  max-width: 1700px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export default FeaturedProperties;
