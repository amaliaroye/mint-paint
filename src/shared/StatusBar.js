import React from 'react'
import styled from 'styled-components'

export default function StatusBar({ fields }) {
  return (
    <StatusBarContainer>
      {fields.map((content, i) => {
        return <StatusField key={i}>{content}</StatusField>
      })}
    </StatusBarContainer>
  )
}

const StatusBarContainer = styled.div`
  margin: 0px 1px;
  display: flex;
  gap: 1px;
`

const StatusField = styled.p`
  margin: 0;
  box-shadow: inset -1px -1px #dfdfdf, inset 1px 1px #808080;
  flex-grow: 1;
  padding: 2px 3px;
  margin: 0;
`
