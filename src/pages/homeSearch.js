import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const HomeSearch = () => {
  return (
    <Layout>
      <StyledContainer className="inner">
        <h1>Home Search</h1>
        <iframe src="https://las.mlsmatrix.com/Matrix/public/IDX.aspx?idx=d07f59b" />
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
    height: 1500px;
    border: 0;
  }
`

export default HomeSearch
