import React, { useRef } from 'react'
import styled from 'styled-components'
import useDimensions from '../hooks/useDimensions'
import Layout from '../components/Layout'

const CurrentListings = () => {
  const [ref, dimensions] = useDimensions()
  console.log(dimensions)
  return (
    <Layout>
      <StyledContainer className="inner">
        <h1>Current Listings</h1>
        <iframe
          src="https://las.mlsmatrix.com/Matrix/public/IDX.aspx?idx=95b259a"
          ref={ref}
        />
      </StyledContainer>
    </Layout>
  )
}

// -------------------- Styles -------------------- //

const StyledContainer = styled.div`
  height: 100%;
  overflow: hidden;
  h1 {
    color: ${({ theme }) => theme.lightGrey};
  }
  iframe {
    width: 100%;
    min-height: 1500px;
    border: 0;
    .divNavResults {
      display: none;
    }
  }
`

export default CurrentListings
