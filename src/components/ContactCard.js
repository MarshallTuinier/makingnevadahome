import React from 'react';
import styled from 'styled-components';

const ContactCard = ({ children }) => {
  return <Card>{children}</Card>;
};

//------Styles------
const Card = styled.div`
  display: inline-block;
  background-color: #003153;
  color: white;
  width: 150px;
  height: 50px;
  margin: 10px 0 10px 5px;
  padding: 5px;
  padding-left: 10px;
  h5 {
    margin: 0;
  }
  .tel-number {
    position: relative;
    padding-left: 5px;
    bottom: 1px;
  }
`;
export default ContactCard;
