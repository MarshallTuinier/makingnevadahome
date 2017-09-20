import React, { Component } from 'react'
import styled from 'styled-components'


export default class Contact extends Component {
  render() {
    return (
      <StyledForm>
        <h1>Contact Us!</h1>
        <p>If you're interested in any of our properties or just would like to talk, feel free to call us or submit a request
           below and we will be in touch shortly.
        </p>
        <form
          name="contact"
          method="post"
          action="/ContactThankYou/"
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
              Your Name:<br />
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email:<br />
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Your Phone Number:<br />
              <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" />
            </label>
          </p>
          <p>
            <button type="submit">Submit</button>
          </p>
        </form>
      </StyledForm>
    );
  }
}

const StyledForm = styled.div`
  padding: 50px 20px;
  margin: 0 auto;

  input {
    width: 600px;
  }

  textarea {
    width: 600px;
    height: 300px;
  }
`
