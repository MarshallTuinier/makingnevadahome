import React from "react";
import styled from "styled-components";
import numberWithCommas from "../utils/numberWithCommas";
import { navigateTo } from "gatsby-link";

const PropertyCard = props => {
  const handleClick = mlsId => {
    navigateTo(`/property?id=${mlsId}`);
  };

  const { address, mlsId, listPrice, property } = props.data;
  const baths = property.bathsFull + property.bathsHalf / 2;
  const price = numberWithCommas(listPrice);

  return (
    <Card propertyData={props.data} onClick={() => handleClick(mlsId)}>
      <div className="home-info">
        <h4>
          {address.streetNumber} {address.streetName}
        </h4>
        <h4>
          {address.city}, {address.state}
        </h4>
        <p>
          {property.bedrooms} bed, {baths} bath
        </p>
      </div>
      <div className="price">
        <p>${price}</p>
      </div>
    </Card>
  );
};

export default PropertyCard;

const Card = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid white;
  padding: 10px 0;
  margin: 20px 10px;
  text-shadow: 1px 1px 2px black;
  background-image: url(${props => props.propertyData.photos[0]});
  background-size: cover;
  h4 {
    margin-bottom: 3px;
  }
  p {
    margin-bottom: 5px;
  }
  .price {
    background-color: rgba(0, 0, 0, 0.6);
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 10%;
    padding-top: 6px;
    transition: all 0.5s;
  }
  .home-info {
    position: absolute;
    top: 20px;
    width: 100%;
    height: auto;
    z-index: 2;
    transition: all 0.5s;
    h4 {
      transition: all 0.5s;
    }
  }
  &:hover {
    cursor: pointer;
    .price {
      height: 100%;
      font-size: 40px;
      padding-top: 20px;
    }
    .home-info {
      top: 40%;
      font-size: 19px;
      h4 {
        font-size: 19px;
      }
    }
  }
  @media (max-width: 600px) {
    width: 65vw;
    height: 65vw;
    .price {
      height: 15%;
    }
  }
  @media (max-width: 450px) {
    .price {
      height: 20%;
      text-align: center;
    }
    .home-info {
      font-size: 12px;
      h4 {
        font-size: 12px;
      }
    }
    &:hover {
      cursor: pointer;
      .price {
        height: 100%;
        font-size: 15px;
      }
      .home-info {
        top: 40%;
        font-size: 12px;
        h4 {
          font-size: 12px;
        }
      }
    }
  }
`;
