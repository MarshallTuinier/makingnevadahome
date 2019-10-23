import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const lasvegas = () => {
  return (
    <Layout>
      <StyledPage className="inner">
        <h2>Las Vegas Real Estate</h2>
        <div className="fancyAfter">
          <p>
            Las Vegas is more than just its 15,000 miles of neon lights and its
            reputation as the best place to experience just what a night out of
            town is all about. It is not just a tourist destination drawing in
            over 40 million people annually. Look beyond its world famous strip
            and a new side of Las Vegas will reveal itself to you.
          </p>
          <p>
            Desert living has never been this upscale or modern. Over the years,
            Las Vegas has come on its own by attracting non-gaming industries to
            diversify. From high-tech firms, respected educational and medical
            facilities, and even cultural arts, living in Las Vegas means living
            in a wealth of possibilities.
          </p>
        </div>
        <h2>Living in Las Vegas</h2>
        <p>
          Living in Las Vegas means living life under the sun. Its residents get
          to enjoy balmy sunny days with beautiful blue skies almost year round.
          Escapes from the city are just a drive away and they are some of
          nature’s best offerings. For cooler climes, just head out to Mount
          Charleston which is less than an hour away. Head out to Rock Canyon
          National Conservation Area for a challenging trek among its soaring
          rocky spires. Even Lake Mead and the Hoover Dam is within close
          proximity. For residents in Las Vegas, you’re only half a day away
          from other major cities and attractions from Los Angeles to the Grand
          Canyon itself.
        </p>
        <p>
          Yet, what makes Las Vegas such an exciting place to live in, whether
          at the strip or its suburban developments, is the people itself. Las
          Vegas is melting pot of diversity may it be urban cowboys, runway
          models, party-loving kids, to casino-fun adults. Every day is an
          exciting blend of individuals which comes as no surprise given how
          many people go to Las Vegas.
        </p>
        <p>
          And this is what makes life in Las Vegas truly outstanding. With such
          a heavy flow of people coming in and out the city, its locals get to
          enjoy a steady stream of business. It makes for a thriving business
          climate made all the more robust by the friendly state tax laws for
          both business and personal income. Las Vegas is just no entertainment
          hotspot in the desert. It can be the best home under the clear Nevada
          sky.
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
export default lasvegas
