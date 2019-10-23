import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const northlasvegas = () => {
  return (
    <Layout>
      <StyledPage className="inner">
        <h2>North Las Vegas Real Estate</h2>
        <div className="fancyAfter">
          <p>
            Two words best describe North Las Vegas: diverse and family-centric.
          </p>
          <p>
            As the fourth biggest community in Nevada, it is home to people of
            varying economic classes, ethnicities and interests. There is a
            healthy mix of white and blue-collared workers, as many make the
            move to the city for its employment opportunities and a healthy
            economy.
          </p>
          <p>
            Nearly half the population are married with children–a number
            greater than that of the county. Parents can easily find excellent
            schools for their kids, as the city’s primary and secondary schools
            are served by the Clark County School District, the fifth-biggest in
            the country.
          </p>
        </div>

        <h2>Living in North Las Vegas</h2>
        <p>
          Situated to the north and east of Las Vegas, North Las Vegas has a
          desert climate with mild temperatures in winter and hot weather in
          summer. This makes the region perfect for various outdoor activities
          like hiking, biking, and climbing.
        </p>
        <p>
          Employment opportunities abound in the city. Manufacturing and
          warehouse distribution are two of the biggest contributors to the
          city’s economy. Recently, there has been an increase in technological
          businesses, particularly those specializing in green technologies.
          Among the biggest sources of business and employment are nearby Nellis
          Air Force Base and the North Las Vegas Airport.
        </p>
      </StyledPage>
    </Layout>
  )
}

const StyledPage = styled.section`
  color: ${({ theme }) => theme.lightGrey};
  margin-bottom: 5rem;
  min-height: 47rem;
`

export default northlasvegas
