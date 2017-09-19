import React from 'react'
import styled from 'styled-components'
import HR from '../../components/HR'
import UnderNavImg from '../../components/UnderNavImg'

const northwest = () => {
  return(
    <div>
    <UnderNavImg />
      <StyledPage>
        <h2>
          Northwest Las Vegas Real Estate
        </h2>
        <p>
          When people speak of Las Vegas, the image that comes to mind is The Strip, where the city’s grand casinos and entertainment venues are clustered.
          But outside of The Strip, Las Vegas and its neighboring cities are home to many fine communities where people work, go to school,
          enjoy their homes and take advantage of the exciting natural features of Las Vegas Valley.
          <br/>
          <br/>
          The neighborhoods in northwest Las Vegas are the best examples of these communities. Located a comfortable distance off The Strip,
          Northwest Las Vegas is home to some of the most affluent homeowners in the Valley.
        </p>
        <HR />
        <h2>
          Living in Northwest Las Vegas
        </h2>
        <p>
          Northwest Las Vegas generally covers the area north of Cheyenne and west of the I-95. It is around 40 minutes away from The Strip,
          which makes it an ideal location for people who want a quieter and slower-paced lifestyle. The area is the choice of Generation X and Y achievers
          who find it an ideal place to start and raise a family. The median age of residents is 35.6 years and more than half the population are family households.
          Despite the somewhat secluded location, the area still offers excellent access to the rest of Las Vegas through the Beltway 215, the I-95 and the I-15.
          The northwest Las Vegas communities themselves are connected by arterial streets, which also lead to the major thoroughfares.
          <br/>
          <br/>
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

export default northwest
