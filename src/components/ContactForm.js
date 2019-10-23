import React from 'react'
import styled from 'styled-components'

const ContactForm = () => (
  <StyledForm>
    <h1>Contact Us</h1>
    <p>
      We'd love to hear from you! If you're interested in any of our properties
      or just would like to talk, feel free to give us a call or submit a
      request below using the form below. We will be in touch as soon as
      possible!
    </p>
    <Phone>
      Phone:{' '}
      <a href="tel:1-702-595-6381" title="Making Nevada Home Phone Number">
        1-702-595-6381
      </a>
    </Phone>
    <form
      name="Contact"
      method="post"
      action="/contactThankYou/"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="Contact" />
      <p hidden>
        <label>
          Don’t fill this out: <input name="bot-field" />
        </label>
      </p>
      <p>
        <label>
          Your Name:
          <br />
          <input type="text" name="name" placeholder="Name" />
        </label>
      </p>
      <p>
        <label>
          Your Email:
          <br />
          <input type="email" name="email" placeholder="Email" />
        </label>
      </p>
      <p>
        <label>
          Your Phone Number:
          <br />
          <input type="text" name="phone" placeholder="Phone Number" />
        </label>
      </p>
      <p>
        <label>
          Message:
          <br />
          <textarea name="message" />
        </label>
      </p>
      <p>
        <Button type="submit">Submit</Button>
      </p>
    </form>
  </StyledForm>
)

const StyledForm = styled.div`
  color: ${({ theme }) => theme.lightGrey};
  input,
  textarea {
    width: 600px;
    border-radius: 4px;
    padding: 1rem;
    background-color: ${({ theme }) => theme.offWhite};
  }

  textarea {
    min-height: 300px;
  }

  textarea:focus,
  input:focus {
    outline: none;
    box-shadow: 1px 1px 1px 4px ${({ theme }) => theme.accent};
  }

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
`

const Button = styled.button`
  width: 140px;
  background-color: ${({ theme }) => theme.darkRed};
  color: ${({ theme }) => theme.offWhite};
  border: none;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.red};
  }

  &:active {
    transform: translateY(3px);
  }

  &:focus {
    outline: none;
  }
`

const Phone = styled.p`
  font-size: 3rem;
  a {
    color: ${({ theme }) => theme.lightGrey};
  }
`

export default ContactForm
