import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

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
      <Link to='/about'>
        <MenuButton>About</MenuButton>
      </Link>
      <a
        href='https://github.com/amaliaroye/mint-paint'
        target='_blank'
        rel='noreferrer'
      >
        <MenuButton>Github</MenuButton>
      </a>
    </MenuWrapper>
  )
}
