/import React, { Component } from 'react';
import UnderNavImg from '../components/UnderNavImg';
import { fetchSingleProperty } from '../utils/api';
import queryString from 'query-string';
import numberWithCommas from '../utils/numberWithCommas';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import Helmet from 'react-helmet';
import styled from 'styled-components';

class Property extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.propertyData) {
      this.setState({
        data: this.props.propertyData,
        loading: false
      });
    } else {
      const parsed = queryString.parse(location.search);
      fetchSingleProperty(parsed.id).then(data => {
        this.setState({
          data: data,
          loading: false
        });
      });
    }
  }

  render() {
    if (!this.state.loading) {
      const {
        address,
        agent,
        mlsId,
        listDate,
        listPrice,
        listingId,
        property,
        photos,
        remarks,
        geo,
        mls,
        association,
        tax
      } = this.state.data;
      const { bathsFull, bathsHalf, area, bedrooms } = property;
      const price = numberWithCommas(listPrice);
      console.log(this.state.data);
      return (
        <StyledContainer>
          <Helmet title={address.streetNumber + ' ' + address.streetName} />
          <UnderNavImg />
          <StyledPage>
            <MainInfo>
              <div>
                <h2>
                  {address.streetNumber} {address.streetName}
                </h2>
                <h2>
                  {address.city}, {address.state} {address.postalCode}
                </h2>
              </div>
              <h2>${numberWithCommas(listPrice)}</h2>
            </MainInfo>
            <p>
              <span>Beds: {bedrooms}</span>
              <span>
                Baths: {bathsFull}|{bathsHalf}
              </span>
              <span>Sq Ft: {numberWithCommas(area)}</span>
            </p>
            <Carousel dynamicHeight>
              {photos.map((photo, index) => (
                <img
                  src={photo}
                  key={index}
                  alt={
                    'Photo for ' +
                    address.streetNumber +
                    ' ' +
                    address.streetName
                  }
                />
              ))}
            </Carousel>
            <p>{remarks}</p>
            <p className="bold">Property Features</p>
            <FeatureHeader>Location Information</FeatureHeader>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">County:</span> {geo.county}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">MLS Area:</span> {mls.area}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <FeatureNoBorder>
                <p>
                  <span className="bold">Directions:</span> {geo.directions}
                </p>
              </FeatureNoBorder>
              <FeatureNoBorder>
                <p>
                  <span className="bold">Cross Streets:</span>{' '}
                  {address.crossStreet}
                </p>
              </FeatureNoBorder>
            </FeatureContainer>
            <FeatureHeader>Interior Features</FeatureHeader>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Bedrooms:</span> {bedrooms}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Rooms:</span>{' '}
                  {property.additionalRooms}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Full Baths:</span> {bathsFull}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Half Baths:</span> {bathsHalf}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Has Fireplace:</span>{' '}
                  {!!property.fireplaces ? 'Yes' : 'No'}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Heating:</span>{' '}
                  {!!property.heating ? property.heating : 'None'}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Cooling:</span>{' '}
                  {!!property.cooling ? property.cooling : 'None'}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Flooring:</span> {property.flooring}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Laundry:</span>{' '}
                  {property.laundryFeatures}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Stories:</span> {property.stories}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <FeatureNoBorder>
                <p>
                  <span className="bold">Additional Features:</span>{' '}
                  {property.interiorFeatures}
                </p>
              </FeatureNoBorder>
            </FeatureContainer>
            <FeatureHeader>Exterior Features</FeatureHeader>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Style:</span> {property.style}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Type:</span> {property.subType}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Construction:</span>{' '}
                  {property.construction}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Roof:</span> {property.roof}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Parking:</span>{' '}
                  {property.parking.description}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Spaces:</span>{' '}
                  {property.parking.spaces}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Has Pool:</span>{' '}
                  {!!property.pool ? 'Yes' : 'No'}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Pool:</span> {property.pool}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Lot:</span> {property.lotDescription}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Lot Size:</span> {}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Foundation:</span>{' '}
                  {property.foundation}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">View:</span> {property.view}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <FeatureNoBorder>
                <p>
                  <span className="bold">Additional Features:</span>{' '}
                  {property.exteriorFeatures}
                </p>
              </FeatureNoBorder>
            </FeatureContainer>
            <FeatureHeader>Additional Information</FeatureHeader>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Property Type</span> {property.type}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Property Subtype:</span>{' '}
                  {property.subType}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Year Built:</span> {property.yearBuilt}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">Property Subtype:</span>{' '}
                  {property.subType}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">HOA:</span> ${numberWithCommas(association.fee)}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">HOA Amenities:</span>{' '}
                  {association.amenities}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Taxes:</span> ${numberWithCommas(tax.taxAnnualAmount)}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">MLS #:</span> {listingId}
                </p>
              </Feature>
            </FeatureContainer>
            <FeatureContainer>
              <Feature>
                <p>
                  <span className="bold">Status:</span> {mls.status}
                </p>
              </Feature>
              <Feature>
                <p>
                  <span className="bold">List Date:</span> {listDate}
                </p>
              </Feature>
            </FeatureContainer>
            <p style={{ padding: '40px 0px', fontSize: 12 }}>
              This listing courtesty of {agent.firstName} {agent.lastName}.
            </p>
          </StyledPage>
        </StyledContainer>
      );
    }
    return <UnderNavImg />;
  }
}

const StyledPage = styled.div`
  max-width: 1200px;
  padding: 15px;
  padding-top: 30px;
  margin: 0 auto;
  background-color: white;
  box-shadow: 0px 0px 31px -3px rgba(0, 0, 0, 0.75);
  border-bottom: 1px solid #f2f2f2;

  h2:first-child {
    margin-bottom: 5px;
  }

  p {
    span {
      margin-right: 20px;
    }
  }

  .bold {
    font-weight: bold;
  }

  @media (max-width: 900px) {
    margin-top: -26px;
  }
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  padding: 0;
`;

const MainInfo = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

const FeatureHeader = styled.div`
  width: 100%;
  border-radius: 3px;
  background-color: #ccc;
  border: 1px solid #999;
  color: white;
  padding-left: 5px;
  text-shadow: 1px 1px 2px black;
`;

const Feature = styled.div`
  border-bottom: 1px solid #ccc;
  padding: 2px;
  width: 49%;
  p {
    font-size: 12px;
    margin: 0;
  }
  @media (max-width: 900px) {
    width: 100%;
  }
`;

const FeatureNoBorder = styled.div`
  padding: 2px;
  width: 49%;
  p {
    font-size: 12px;
    margin: 0;
  }
  @media (max-width: 900px) {
    width: 100%;
    &:nth-child(2) {
      border-top: 1px solid #ccc;
    }
  }
`;

const FeatureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 900px) {
    flex-direction: column;
  }
`;
export default Property;
