import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import Layout from '../components/Layout'

const Sitemap = () => (
  <Layout>
    <StyledPage className="inner">
      <h2>Sitemap</h2>
      <ul>
        <li>
          <p>
            <Link to="/">Home</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to="/about">About</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to="/currentListings">Our Properties</Link>
          </p>
        </li>
        <li>
          <p>
            <Link to="/homeSearch">Home Search</Link>
          </p>
        </li>
        <li>Communities</li>
        <ul>
          <li>
            <p>
              <Link to="/communities/henderson">Henderson Real Estate</Link>
            </p>
          </li>
          <li>
            <p>
              <Link to="/communities/summerlin">Summerlin NV Real Estate</Link>
            </p>
          </li>
          <li>
            <p>
              <Link to="/communities/southwest">
                Southwest Las Vegas Real Estate
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to="/communities/lasvegas">Las Vegas NV Real Estate</Link>
            </p>
          </li>
          <li>
            <p>
              <Link to="/communities/bouldercity">
                Boulder City NV Real Estate
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to="/communities/northlasvegas">
                North Las Vegas Real Estate
              </Link>
            </p>
          </li>
          <li>
            <p>
              <Link to="/Communities/northwest">
                Northwest Las Vegas Real Estate
              </Link>
            </p>
          </li>
        </ul>
        <li>
          <p>
            <Link to="/contactUs">Contact Us</Link>
          </p>
        </li>
      </ul>
    </StyledPage>
  </Layout>
)

//-------Styles-------

const StyledPage = styled.div`
  a,
  li,
  ul {
    color: ${({ theme }) => theme.lightGrey};
    text-decoration: none;
  }
  h2 {
    color: ${({ theme }) => theme.lightGrey};
    margin-top: 50px;
  }
  @media (max-width: 920px) {
    display: flex;
    flex-direction: column;
    .map {
      margin: 0 auto;
    }
  }
`

//------End Styles------
export default Sitemap
