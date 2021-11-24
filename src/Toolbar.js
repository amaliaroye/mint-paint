import React from 'react'
import styled from 'styled-components'
import toolSpritesheet from './assets/tools.png'
import { TOOLS } from './constants'
import Tooltip from './shared/Tooltip'

export default function Toolbar({
  currentTool,
  setCurrentTool,
  setToolOptions,
}) {
  return (
    <ToolbarContainer>
      <ToolWrapper>
        {TOOLS.map(({ title, name, disabled, position, options }, i) => {
          return (
            <ToolButton
              key={i}
              title={title}
              onClick={() => {
                if (!disabled) {
                  setCurrentTool(name)
                  setToolOptions(options)
                }
              }}
              selected={!disabled && currentTool === name ? true : false}
              disabled={disabled}
            >
              <ToolIcon position={position} />
            </ToolButton>
          )
        })}
      </ToolWrapper>
      <ToolOptions />
    </ToolbarContainer>
  )
}

const ToolbarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4px;
  background-color: var(--gray);
  gap: 4px;
`

const ToolWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 28px);
`

const ToolButton = styled.button`
  background-color: var(--neutral-300);
  padding: 4px;
  display: flex;
  border-style: ${(props) => (props.selected ? 'inset' : 'outset')};
  background-color: ${(props) =>
    props.selected ? 'var(--neutral-200)' : 'var(--neutral-300)'};
  border-color: var(--border-color);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
`

const ToolIcon = styled.div`
  image-rendering: pixelated;
  background-image: url(${toolSpritesheet});
  background-position: ${(props) => props.position} 0;
  height: 16px;
  width: 16px;
`

const ToolOptions = styled.div`
  height: 64px;
  width: 48px;
  background-color: var(--neutral-300);
  border-style: inset;
`
