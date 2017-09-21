import React from 'react';
import styled from 'styled-components';
import HR from '../../components/HR';
import UnderNavImg from '../../components/UnderNavImg';

const northlasvegas = () => {
  return (
    <div>
      <UnderNavImg />
      <StyledPage>
        <h2>North Las Vegas Real Estate</h2>
        <p>
          Two words best describe North Las Vegas: diverse and family-centric.
          <br />
          <br />
          As the fourth biggest community in Nevada, it is home to people of
          varying economic classes, ethnicities and interests. There is a
          healthy mix of white and blue-collared workers, as many make the move
          to the city for its employment opportunities and a healthy economy.
          <br />
          <br />
          Nearly half the population are married with children–a number greater
          than that of the county. Parents can easily find excellent schools for
          their kids, as the city’s primary and secondary schools are served by
          the Clark County School District, the fifth-biggest in the country.
        </p>
        <HR />
        <h2>Living in North Las Vegas</h2>
        <p>
          Situated to the north and east of Las Vegas, North Las Vegas has a
          desert climate with mild temperatures in winter and hot weather in
          summer. This makes the region perfect for various outdoor activities
          like hiking, biking, and climbing.
          <br />
          <br />
          Employment opportunities abound in the city. Manufacturing and
          warehouse distribution are two of the biggest contributors to the
          city’s economy. Recently, there has been an increase in technological
          businesses, particularly those specializing in green technologies.
          Among the biggest sources of business and employment are nearby Nellis
          Air Force Base and the North Las Vegas Airport.
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

export default northlasvegas;
