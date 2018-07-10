import React from 'react';
import styled from 'styled-components';
import numberWithCommas from '../utils/numberWithCommas';

const PropertyCard = props => {
  const { address, photo, price, length, beds, baths } = props.data;
  return (
    <Card propertyData={props.data}>
      <div className="home-info">
        <h4>{address}</h4>
        <h4 />
        <p>
          {beds} beds, {baths} bath
        </p>
      </div>
      <div className="price">
        <p>{price}</p>
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
  background-image: url('${props => props.propertyData.photo}');
  background-size: cover;
  background-repeat: no-repeat;
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
    width: 50vw;
    height: 50vw;
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
