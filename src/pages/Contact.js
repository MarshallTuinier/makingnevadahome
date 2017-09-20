import React from 'react'
import UnderNavImg from '../components/UnderNavImg'
import ContactForm from '../components/ContactForm'
import styled from 'styled-components'

const Contact = () => {
  return(
    <div>
      <UnderNavImg />
      <StyledPage>        
        <ContactForm />
      </StyledPage>
    </div>
  )
}

const StyledPage = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`
export default Contact
