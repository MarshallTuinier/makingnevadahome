import React from 'react';
import styled from 'styled-components';

const ContactBlock = props => {
  return (
    <Contact className={props.className} onClick={props.onClick}>
      <a href={props.linkTo}>{props.children}</a>
    </Contact>
  );
};

const Contact = styled.div`
  text-align: center;
  font-size: 30px;
  display: inline-block;
  height: 60px;
  width: 49.875%;
  background-color: #003153;
  margin: 0 auto;
  padding: 0px;
  padding-top: 15px;
  border: 1px solid #003153;
  a {
    text-decoration: none;
    color: white !important;
    font-family: sans-serif;
  }
  @media (max-width: 600px) {
    width: 33%;
  }
`;

export default ContactBlock;
