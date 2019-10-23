import React from 'react'
import styled from 'styled-components'

const Wave = ({ color, invert, shift }) => (
  <StyledWave color={color} invert={invert} shift={shift}>
    <svg viewBox="0 0 1440 120">
      <svg viewBox="0 0 1440 120">
        <path d="M1440,21.2101911 L1440,120 L0,120 L0,21.2101911 C120,35.0700637 240,42 360,42 C480,42 600,35.0700637 720,21.2101911 C808.32779,12.416393 874.573633,6.87702029 918.737528,4.59207306 C972.491685,1.8109458 1026.24584,0.20382166 1080,0.20382166 C1200,0.420382166 1320,7.35031847 1440,21.2101911 Z" />
      </svg>
    </svg>
  </StyledWave>
)

const StyledWave = styled.div`
  position: absolute;
  bottom: -1rem;
  width: 100%;
  min-width: ${({ shift }) => (shift ? `calc(2500px + ${shift}px)` : '2500px')};
  z-index: 1;
  ${({ shift }) => (shift ? `transform: translateX($-{shift}px)` : '')};
  svg {
    fill: ${({ color, theme }) => color || theme.offWhite};
    ${({ invert }) => (invert ? 'transform: scaleX(-1)' : '')};
  }
`
export default Wave
