import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import AgentInfo from '../components/AgentInfo';
import Communities from '../components/Communities';
import PreviousListings from '../components/PreviousListings';
import Testimonials from '../components/Testimonials';
import styled from 'styled-components';

const IndexPage = () => (
  <ResponsiveContainer>
    <ImageCarousel />
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
