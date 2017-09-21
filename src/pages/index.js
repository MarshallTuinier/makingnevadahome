import React from 'react';
import ImageCarousel from '../components/ImageCarousel';
import AgentInfo from '../components/AgentInfo';
import Communities from '../components/Communities';
import FeaturedProperties from '../components/FeaturedProperties';
import styled from 'styled-components';

const IndexPage = () => (
  <ResponsiveContainer>
    <ImageCarousel />
    <AgentInfo />
    <FeaturedProperties />
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
