import React from 'react';
import styled from 'styled-components';
import HR from '../../components/HR';
import UnderNavImg from '../../components/UnderNavImg';

const bouldercity = () => {
  return (
    <div>
      <UnderNavImg />
      <StyledPage>
        <h2>Boulder City Real Estate</h2>
        <p>
          What a lot of people don’t realize about Boulder City is that it’s a
          gem in the desert that’s just waiting to be discovered; a wonderful
          little desert town that lies just about 26 miles southeast of the city
          of Las Vegas, a short half an hour drive away.
          <br />
          <br />
          Boulder City is a uniquely charming place to live, like the Hoover
          Dam, the town itself was meant to be built as a manifestation of
          optimism in a nation recovering from the Great Depression, by
          Dutch-born urban architect Saco Rienk de Boer, who placed an emphasis
          on having a clean-living environment for its residents.
        </p>
        <HR />
        <h2>Living in Boulder City</h2>
        <p>
          Carefully planned as a model community, the city’s design is no less
          than one of the best in the area, combining great amenities with fun
          and exciting attractions.
          <br />
          <br />
          Its residents enjoy an abundance of public space, large amounts of
          landscaping and the traditional square grid of its layout that makes
          the city very walkable. At the city’s heart is the wonderful
          Bicentennial Park a great place to meet and make friends where
          families can enjoy having nice picnics.
          <br />
          <br />
        </p>
        <HR />
      </StyledPage>
    </div>
  );
};

const StyledPage = styled.div`
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto;
`;

export default bouldercity;
