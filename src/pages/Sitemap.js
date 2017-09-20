import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import UnderNavImg from '../components/UnderNavImg'

const Sitemap = () => (
  <div>
    <UnderNavImg />
    <StyledPage>
      <h2>Sitemap</h2>
      <ul>
        <li><p><Link to='/' >Home</Link></p></li>
        <li><p><Link to='/About' >About</Link></p></li>
        <li><p><Link to='/OurProperties' >Our Properties</Link></p></li>
        <li><p><Link to='/Search' >Home Search</Link></p></li>
        <li>Communities</li>
        <ul>
          <li><p><Link to='/Communities/Henderson' >Henderson Real Estate</Link></p></li>
          <li><p><Link to='/Communities/Summerlin' >Summerlin NV Real Estate</Link></p></li>
          <li><p><Link to='/Communities/Southwest' >Southwest Las Vegas Real Estate</Link></p></li>
          <li><p><Link to='/Communities/LasVegas' >Las Vegas NV Real Estate</Link></p></li>
          <li><p><Link to='/Communities/BoulderCity' >Boulder City NV Real Estate</Link></p></li>
          <li><p><Link to='/Communities/NorthLasVegas' >North Las Vegas Real Estate</Link></p></li>
          <li><p><Link to='/Communities/NorthWest' >Northwest Las Vegas Real Estate</Link></p></li>
        </ul>
        <li><p><Link to='/Contact' >Contact</Link></p></li>
      </ul>
    </StyledPage>
  </div>
)


//-------Styles-------

const StyledPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding-left: 20px;
  a {
    color: black;
    text-decoration: none;
  }
  h2 {
    margin-top: 50px;
  }
  @media(max-width: 900px) {
    display: flex;
    flex-direction: column;
    .map {
      margin: 0 auto;
    }
  }
`

//------End Styles------
export default Sitemap
