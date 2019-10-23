import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const CommunityButton = ({ children }) => {
  return (
    <StyledLink
      to={
        '/communities/' +
        children
          .split(' ')
          .join('')
          .toLowerCase()
      }
    >
      <h3>{children}</h3>
    </StyledLink>
  )
}

const StyledLink = styled(Link)`
  width: 210px;
  height: 58px;
  background-color: ${({ theme }) => theme.darkRed};
  text-shadow: none;
  color: white;
  margin: 1rem 0;
  transition: background-color 0.3s, color 0.3s, border 0.3s;
  outline: none;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover,
  &:focus {
    cursor: pointer;
    outline: none;
    background-color: ${({ theme }) => theme.offWhite};

    h3 {
      color: ${({ theme }) => theme.black};
    }
  }

  h3 {
    font-size: 20px;
    text-decoration: none;
    color: ${({ theme }) => theme.offWhite};
    transition: background-color 0.3s;
  }

  @media (max-width: ${({ theme }) => theme.tabletBreakpoint}) {
    width: 100%;
    margin: 1rem auto;
    border: none;
    outline: none;
    background-color: ${({ theme }) => theme.offWhite};
    h3 {
      color: ${({ theme }) => theme.black};
    }
    &:hover,
    &:focus {
      border: none;
      background-color: ${({ theme }) => theme.darkRed};
      h3 {
        color: ${({ theme }) => theme.offWhite};
      }
    }
  }
`

export default CommunityButton
