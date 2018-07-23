import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import AgentInfo from '../components/AgentInfo';
import Communities from '../components/Communities';
import PreviousListings from '../components/PreviousListings';
import Testimonials from '../components/Testimonials';
import styled from 'styled-components';

const IndexPage = props => (
  <ResponsiveContainer>
    <ImageCarousel data={props.data} />
    <AgentInfo />
    <PreviousListings />
    <Testimonials />
    <Communities />
  </ResponsiveContainer>
);

const ResponsiveContainer = styled.div`
  overflow: auto;
  height: auto;
  display: flex;
  flex-direction: column;
`;
export default IndexPage;

export const PageQuery = graphql`
  query SliderImageQuery {
    sliderImg1: imageSharp(id: { regex: "/sliderImg1.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    sliderImg2: imageSharp(id: { regex: "/sliderImg2.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    sliderImg3: imageSharp(id: { regex: "/sliderImg3.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    sliderImg4: imageSharp(id: { regex: "/sliderImg4.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
    sliderImg5: imageSharp(id: { regex: "/sliderImg5.jpg/" }) {
      sizes(maxWidth: 1240) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
