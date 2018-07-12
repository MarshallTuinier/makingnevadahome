import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const CommunityButton = ({ children }) => {
  return (
    <Link
      to={
        '/communities/' +
        children
          .split(' ')
          .join('')
          .toLowerCase()
      }
    >
      <StyledButton>
        <h3>{children}</h3>
      </StyledButton>
    </Link>
  );
};

const StyledButton = styled.div`
  width: 210px;
  height: 58px;
  background-color: #20ace1;
  text-shadow: none;
  color: white;
  padding-top: 18px;
  margin: 10px 0;
  border: 1px solid white;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  &:hover {
    cursor: pointer;
    outline: none;
    border: 1px solid white;
    background-color: white;

    h3 {
      color: #003153;
    }
  }

  h3 {
    font-size: 20px;
    text-decoration: none;
    color: white;
    transition: background-color 0.3s;
  }

  @media (max-width: 920px) {
    width: 100%;
    margin: 0 auto;
    border: none;
    outline: none;
    margin-bottom: 0;
    background-color: white;
    h3 {
      margin-bottom: 0;
      color: #003153;
    }
    &:hover {
      border: none;
      background-color: #20ace1;
      h3 {
        color: white;
      }
    }
  }
`;

export default CommunityButton;
