import React from 'react'
import underNavImg from '../assets/underNavImg.jpg'
import styled from 'styled-components'

const UnderNavImg = () => (
  <StyledImgContainer>
    <HeaderImg src={underNavImg} />
  </StyledImgContainer>
)

const StyledImgContainer = styled.div`
  width: 100%;
  height: 275px;
  overflow: hidden;
  position: relative;
  @media(max-width: 900px) {
    height: 200px;
  }
  @media(max-width: 600px) {
    height: 125px;
  }
`

const HeaderImg = styled.img`
  width: 100%;
  position: absolute;
  bottom: -40px;
  @media(max-width: 600px) {
    bottom: 0;
  }
`

export default UnderNavImg
