import React from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import minimize from '../assets/icon-minimize.svg'
import maximize from '../assets/icon-maximize.svg'
import close from '../assets/icon-close.svg'
import help from '../assets/icon-help.svg'
import restore from '../assets/icon-restore.svg'

/*
  <TitleBar
    text=''
    buttons={['minimize', 'maximize', 'close', 'help', 'restore']}
  />
*/

export default function TitleBar({ text, buttons }) {
  return (
    <TitleBarContainer>
      <TitleText>{text}</TitleText>
      <TitleControls>
        {buttons.map((button, i) => {
          return <TitleButton type={getIcon(button)} key={i} />
        })}
      </TitleControls>
    </TitleBarContainer>
  )
}

const TitleBarContainer = styled.header`
  background-color: var(--dialog-blue);
  padding: 3px 2px 3px 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const TitleText = styled.p`
  font-weight: bold;
  color: white;
  letter-spacing: 0;
  margin: 0;
  margin-right: 24px;
`

const TitleControls = styled.div`
  display: flex;
`

const TitleButton = styled(Button)`
  padding: 0;
  display: block;
  min-width: 16px;
  min-height: 14px;
  background-image: ${(props) => `url(${props.type})`};
  background-repeat: no-repeat;
  background-position: ${(props) => {
    switch (props.type) {
      case minimize:
        return 'bottom 3px left 4px'
      case maximize:
        return 'top 2px left 3px'
      case restore:
        return 'top 2px left 3px'
      case help:
        return 'top 2px left 5px'
      case close:
        return 'top 3px left 4px'
      default:
        return
    }
  }};

  &:active {
    padding: 0;
  }
  &:focus {
    outline: none;
  }
`

// This is super inefficient, but it works for now to import the correct url of the svg files before compiling?
function getIcon(type) {
  switch (type) {
    case 'minimize':
      return minimize
    case 'maximize':
      return maximize
    case 'close':
      return close
    case 'help':
      return help
    case 'restore':
      return restore
    default:
      return
  }
}
