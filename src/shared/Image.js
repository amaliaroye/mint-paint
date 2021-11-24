import React from 'react'
import styled from 'styled-components'

export default function Image({ src, alt, round = '', width = 'auto' }) {
  return <StyledImage src={src} alt={alt} round={round} width={width} />
}

const StyledImage = styled.img`
  width: ${(props) => props.width};
  max-width: 100%;
  height: auto;
  display: block;
  border-radius: ${(props) => (props.round ? '50%' : '0')};
`
