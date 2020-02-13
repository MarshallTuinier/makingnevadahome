import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

const NotFoundPage = () => (
  <Layout>
    <FourOhFour>
      <h1>NOT FOUND</h1>
      <p>You just hit a route that doesn&#39;t exist... yet.</p>
    </FourOhFour>
  </Layout>
)

const FourOhFour = styled.section`
  margin: 0 auto;
  text-align: center;
  color: white;
`

export default NotFoundPage
