import React from 'react'
import styled from 'styled-components'
import HR from '../../components/HR'
import UnderNavImg from '../../components/UnderNavImg'

const henderson = () => {
  return(
    <div>
    <UnderNavImg />
      <StyledPage>
        <h2>
          Henderson Real Estate
        </h2>
        <p>
          Henderson is touted as Nevada’s second largest city. It is located just 7 miles from the world most famous strip, the Vegas Strip and only a short drive away from Lake Mead.
          Compared to its famous sister, Henderson is a suburban community of gated residences, excellent schools, friendly neighborhood stores, and small town closeness even for a city that is ever-growing.
          <br/>
          <br/>
          The way of life in Henderson is nothing short of outstanding. As the home of close to 300,000 residents, Henderson has earned its motto “A Place to Call Home” by being the only full-service city in Southern Nevada.
          By dedicating its police, fire, and utility services at a very efficient and effective way, its residents are assured that they truly live in a city that takes care of them.
          <br/>
          <br/>
          Another reason why Henderson is an excellent place to live in is the tax advantage their residents enjoy. Nationwide, Nevada has the eighth-lowest tax burden on income. On top of this, Henderson’s residents do not pay or have minimal taxes on income,
          corporate, inheritance, estate, and gifts. This favorable tax structure makes Henderson a favorable location for business as well.
        </p>
        <HR />
        <h2>
          Living in Henderson
        </h2>
        <p>
          Henderson is well known for its numerous gated communities. No less than 27 master planned communities can be found in the city. Among them are:
          <br/>
          <br/>
          <ul>
            <li>Inspirada</li>
            <li>Seven Hills</li>
            <li>Green Valley</li>
            <li>Cadence</li>
            <li>Tuscany Village</li>
          </ul>
          All of this is testament to the attractiveness of the city as a place to live. With so many communities, the housing options in Henderson are just as numerous and varied.
          Tremendous development is an ongoing activity in Henderson as to keep up with the demand for homes in the city. As such, the real estate options in Henderson encompass every size and every price range.
          Buyers can choose from single family homes perfect for starter families, sprawling luxury homes on sweeping landscaped lots, to gorgeous homes in master planned neighborhoods.
          Best of all, no matter the choice a buyer makes, they are sure that their new home is accessible, safe, and is located close to great schools and establishments.
          <br/>
          <br/>
          Henderson may be located close to the desert but homes in the city are well suited for desert living. Featuring high floor to ceiling ratios, carefully engineered structural integration for maximum air circulation,
          special materials for insulation, as well as optimum functional aesthetics, real estate properties in Henderson make desert living not only comfortable but enjoyable as well.
        </p>
        <HR />
      </StyledPage>
    </div>
  )
}



const StyledPage = styled.div`
  margin: 35px;
  margin-left: 10vw;
  max-width: 800px;

  @media(max-width: 600px) {
    margin: 0 auto;
    margin-left: 10px;
  }
`

export default henderson
