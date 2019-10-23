import React from 'react'
import styled from 'styled-components'
import CommunityButton from './CommunityButton'

const Communities = () => {
  const communityList = [
    'HENDERSON',
    'SUMMERLIN',
    'SOUTH WEST',
    'LAS VEGAS',
    'BOULDER CITY',
    'NORTH LAS VEGAS',
    'NORTH WEST',
  ]
  return (
    <Wrapper>
      <Main className="inner">
        <h2>Communities</h2>
        <CommunitiesWrapper>
          {communityList.map(city => (
            <CommunityButton key={city}>{city}</CommunityButton>
          ))}
        </CommunitiesWrapper>
      </Main>
    </Wrapper>
  )
}

const Main = styled.section`
  width: 100%;
  min-height: 300px;
  color: ${({ theme }) => theme.offWhite};
  position: relative;
  z-index: 2;
  text-align: center;
  background-color: ${({ theme }) => theme.lightGrey};
  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    height: 100%;
  }

  h2 {
    margin-top: 1.5rem;
    font-size: 4rem;
    color: ${({ theme }) => theme.black};
    position: relative;
  }
`

const CommunitiesWrapper = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  max-width: 920px;
  justify-content: space-around;
  a {
    text-decoration: none;
  }
  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 3px;
  }
`

const Wrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.lightGrey};
  margin-top: -10rem;
`

export default Communities
