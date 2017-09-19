import React from 'react'
import styled from 'styled-components'
import HR from '../../components/HR'
import UnderNavImg from '../../components/UnderNavImg'

const southwest = () => {
  return(
    <div>
    <UnderNavImg />
      <StyledPage>
        <h2>
          Southwest Las Vegas Real Estate
        </h2>
        <p>
          The Southwest Las Vegas Valley boasts many amazing communities that define the best of desert living.
          Balancing the most amazing of locations and most modern of conveniences, these communities are some ofthe finest in Nevada.
          And among these, three are particular standouts for the quality of lifethey afford their residents.
          <br/>
          <br/>
          <b>Mountain’s Edge</b> is a well-known master-planned community that offers a live-work-and-play lifestyle in one gorgeous location.
          Here, modern homes, schools, offices, and places of recreation are all seamlessly integrated into one convenient network.
          All this against a beautiful backdrop of wide open spaces sprinkled withparks and trails.
          <br/>
          <br/>
          Another notable community is <b>Southern Highlands</b>. This exclusive enclavemakes the most of its location on the scenic foothills of Las Vegas.
          Just 15 minutes from the Strip, it combines accessibility, privacy and luxury in one family-friendly community. Residents enjoy unparalleled
          access to the outdoors, including the Southern Highlands Golf Course, one of the country’s best-rated courses.
          <br/>
          <br/>
          <b>Rhodes Ranch</b> is a fantastic golf course community that offers a relaxed and elegant lifestyle. Located at the foot of Spring Mountain,
          its centerpiece is the superb 18-hole Rhodes Ranch Golf Course. With gorgeous views of a lush landscaped course, access to amazing country club amenities,
          and close proximity to Las Vegas, a home on Rhodes Ranch means living life to the fullest.
        </p>
        <HR />
        <h2>
          Living in Southwest Las Vegas
        </h2>
        <p>
          You’ll have plenty of homes to choose from in these three communities. Each offers distinct choices that will suit any number of preferences,
          whether you’re looking to live right on a golf course or up on a hill.
          <br/>
          <br/>
          <b>Homes in Mountain’s Edge</b> are mostly new construction and have well-designed floor plans. With a focus on space and livability, homes here typically
          feature high ceilings, luxurious finishes, gourmet kitchens with granite counter-tops and exquisite cabinetry, and ample outdoor living spaces.
          Builders here include Ryland Homes, Century Communities, Lennar, DR Horton, and Pulte Homes. Mountain’s Edge has also been designed with sustainability in mind.
          Many homes are ENERGY STAR certified and the community has a drought-tolerant design. The landscaping throughout is set to save over 200 million gallons of water
          annually versus a traditional design.
          <br/>
          <br/>
          The <b>real estate options in Southern Highlands</b> reflect the laid back elegance of its overall atmosphere. Set in custom lots ranging in size from one-third to five
          acres, with breathtaking views of their hillysurroundings, homes here are among the best in the area. You’ll find new construction and move-in ready homes as well as resales.
          Among the builders in Southern Highlands are Lennar, Pulte Homes, William Lyon, and Woodside Homes. Estate lots are available in Augusta Canyon and Olympia Ridge.
          <br/>
          <br/>
          <b>Rhodes Ranch</b> offers new construction homes and resalesas well as a variety of condos and townhomes. Whether you’re looking for a starter home or a sprawling, 
          multimillion-dollar luxury estate, you’ll find it here. Real estate options in Rhodes Ranch have been developed with residents’ convenience and well-being in mind.
          The community is just 20 minutes or so from Downtown Las Vegas and residents enjoy access to a championship golf course, a state-of-the-art recreation center, and resort-style pools.
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

export default southwest
