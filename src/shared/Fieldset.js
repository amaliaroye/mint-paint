import React from 'react'
import styled from 'styled-components'
import groupboxBorder from '../assets/border-groupbox.svg'

export default function Fieldset({ children, label }) {
  return (
    <FieldContainer>
      {label && <FieldLabel>{label}</FieldLabel>}
      {children}
    </FieldContainer>
  )
}

const FieldContainer = styled.fieldset`
  border-image: url(${groupboxBorder}) 2;
  padding: calc(2 * var(--border-width) + var(--element-spacing));
  padding-block-start: var(--element-spacing);
  margin: 0;
  margin-top: 10px;
`

const FieldLabel = styled.legend`
  background: var(--surface);
  padding: 0 10px;
  font-weight: bold;
`
