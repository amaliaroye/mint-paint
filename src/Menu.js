import React from 'react'
import styled from 'styled-components'

const MenuWrapper = styled.div`
  width: 100%;
  background-color: #c0c0c0;
`

const MenuButton = styled.button`
  border: 0;
  background-color: transparent;
  padding: 4px;

  &::first-letter {
    text-decoration: underline;
  }
`

export default function Menu() {
  return (
    <MenuWrapper>
      <MenuButton>File</MenuButton>
      <MenuButton>Edit</MenuButton>
      <MenuButton>View</MenuButton>
      <MenuButton>Image</MenuButton>
      <MenuButton>Options</MenuButton>
      <MenuButton>Help</MenuButton>
    </MenuWrapper>
  )
}
