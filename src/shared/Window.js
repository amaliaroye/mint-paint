import React from 'react'
import styled from 'styled-components'

export default function Window() {
  return <div></div>
}

const WindowContainer = styled.section`
  box-shadow: var(--border-window-outer), var(--border-window-inner);
  background: var(--surface);
  padding: 3px;
`
