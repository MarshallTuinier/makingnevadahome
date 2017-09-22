import React, { Component } from 'react';
import styled from 'styled-components';

export default class Contact extends Component {
  render() {
    return (
      <StyledForm>
        <h1>Contact Us!</h1>
        <p>
          We'd love to hear from you! If you're interested in any of our
          properties or just would like to talk, feel free to give us a call, or
          submit a request below using the form below, and we will be in touch
          as soon as possible.
        </p>
        <form
          name="Contact"
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
              <input type="text" name="name" placeholder="Name" />
            </label>
          </p>
          <p>
            <label>
              Your Email:<br />
              <input type="email" name="email" placeholder="Email" />
            </label>
          </p>
          <p>
            <label>
              Your Phone Number:<br />
              <input type="text" name="phone" placeholder="Phone Number" />
            </label>
          </p>
          <p>
            <label>
              Message:<br />
              <textarea name="message" />
            </label>
          </p>
          <p>
            <Button type="submit">Submit</Button>
          </p>
        </form>
      </StyledForm>
    );
  }
}

const StyledForm = styled.div`
  padding: 50px 20px;
  margin: 0 auto;
  text-align: center;

  input {
    width: 600px;
    border-radius: 7px;
    border-style: ridge;
  }

  textarea {
    width: 600px;
    height: 300px;
    border-radius: 7px;
  }
  form {
    margin: 0 auto;
  }
  textarea:focus,
  input:focus {
    outline: none;
    box-shadow: 0px 0px 0px 1.5px #20ace1;
  }

  @media (max-width: 600px) {
    input {
      width: 100%;
    }
    textarea {
      width: 100%;
    }
  }
`;

const Button = styled.button`
  width: 140px;
  background-color: #003153;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 10px;
  transition: background-color 0.3s;
  &:hover {
    cursor: pointer;
    background-color: #20ace1;
  }

  &:active {
    transform: translateY(3px);
  }

  &:focus {
    outline: none;
  }
`;
