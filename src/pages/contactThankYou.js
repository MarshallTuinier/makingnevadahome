import React from 'react'
import styled from 'styled-components'

import Layout from '../components/Layout'

const ContactThankYou = () => {
  return (
    <Layout>
      <div className="inner">
        <ThankYou>Thank you for contacting us.</ThankYou>
        <ThankYou>We will be in touch at our earliest opportunity.</ThankYou>
      </div>
    </Layout>
  )
}

const ThankYou = styled.h2`
  margin: 1rem 0;
  color: ${({ theme }) => theme.lightGrey};
`
export default ContactThankYou
