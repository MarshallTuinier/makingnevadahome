import React from 'react'
import styled from 'styled-components'
import Layout from '../../components/Layout'

const northwest = () => {
  return (
    <Layout>
      <StyledPage className="inner">
        <h2>Northwest Las Vegas Real Estate</h2>
        <div className="fancyAfter">
          <p>
            When people speak of Las Vegas, the image that comes to mind is The
            Strip, where the city’s grand casinos and entertainment venues are
            clustered. But outside of The Strip, Las Vegas and its neighboring
            cities are home to many fine communities where people work, go to
            school, enjoy their homes and take advantage of the exciting natural
            features of Las Vegas Valley.
          </p>
          <p>
            The neighborhoods in northwest Las Vegas are the best examples of
            these communities. Located a comfortable distance off The Strip,
            Northwest Las Vegas is home to some of the most affluent homeowners
            in the Valley.
          </p>
        </div>
        <h2>Living in Northwest Las Vegas</h2>
        <p>
          Northwest Las Vegas generally covers the area north of Cheyenne and
          west of the I-95. It is around 40 minutes away from The Strip, which
          makes it an ideal location for people who want a quieter and
          slower-paced lifestyle. The area is the choice of Generation X and Y
          achievers who find it an ideal place to start and raise a family. The
          median age of residents is 35.6 years and more than half the
          population are family households. Despite the somewhat secluded
          location, the area still offers excellent access to the rest of Las
          Vegas through the Beltway 215, the I-95 and the I-15. The northwest
          Las Vegas communities themselves are connected by arterial streets,
          which also lead to the major thoroughfares.
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

export default northwest
