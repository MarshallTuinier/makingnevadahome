import React, { Component } from 'react'
import styled from 'styled-components'


export default class Contact extends Component {
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form
          name="contact"
          method="post"
          action="/ContactThankYou/"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
        >
          <input type="hidden" name="form-name" value="contact" />
          <p hidden>
            <label>
              Don’t fill this out: <input name="bot-field" />
            </label>
          </p>
          <p>
            <label>
              Your name:<br />
              <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your email:<br />
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
            <button type="submit">Send</button>
          </p>
        </form>
      </div>
    );
  }
}
