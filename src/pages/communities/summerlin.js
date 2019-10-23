import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const summerlin = () => {
  return (
    <Layout>
      <StyledPage className="inner">
        <h2>Summerlin Real Estate</h2>
        <div className="fancyAfter">
          <p>
            Summerlin boasts of some of the most gorgeous views in Southern
            Nevada. Standing a the foothills of the Las Vegas Valley, this
            master planned community makes the best case for desert living. It
            is adjacent to the famous Red Rock Canyon National Conservation
            Area. Making the most of its location’s wide and open spaces, a
            diverse collection of parks and neighborhoods, world-class
            recreational areas, and an outstanding way of life, Summerlin makes
            it very clear why it is the “chief community” in the Las Vegas
            Valley area. It is 22,500 acres of prime living space.
          </p>
          <p>
            The main draw to living in Summerlin is summed up by Money magazine
            which named it the one of best reasons to live in the Vegas area.
            The publication highlighted its careful maintenance of residential,
            commercial, and civic features. This New Urbanist layering has
            turned and maintained Summerlin’s pleasant neighborhoods and in turn
            this keeps property values up.
          </p>
        </div>
        <h2>Living in Summerlin</h2>
        <p>
          And still, Summerlin refuses to sits on its laurels. The community is
          still set on a path of evolution and progress that aims to make
          Summerlin even better for its residents. Among the developments
          include a new 400-acre urban center that features fashion, dining and
          entertainment hubs that will create a live, work, play lifestyle in
          the community. And this is just the crown piece in Summerlin’s
          continued innovation to become a walkable and thoughtfully integrated
          community.
        </p>
        <p>
          Currently, Summerlin encompasses more than 150 parks, nine golf
          courses, a state of the art medical center, and an excellent
          collection of public and private schools. Residents are connected by
          an extensive trail system that is popular among the locals, both as a
          major footpath and as an attraction. As the home of close to 100,000
          people, Summerlin is an excellent location to live in for its beauty,
          integration and an overall spectacular way of living.
          <br />
          <br />
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

export default summerlin
