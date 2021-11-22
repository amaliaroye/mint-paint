import React from 'react'
import styled from 'styled-components'
import toolSpritesheet from './assets/tools.png'
import { TOOLS } from './constants'

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
  background-color: #c0c0c0;
  padding: 4px;
  display: flex;
  border-style: ${(props) => (props.selected ? 'inset' : 'outset')};
  background-color: ${(props) =>
    props.selected ? 'var(--light-gray)' : 'var(--gray)'};
  border-color: var(--border-color);
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
  background-color: var(--gray);
  border-style: inset;
`

export default function Toolbar({ currentTool, setCurrentTool }) {
  return (
    <ToolbarContainer>
      <ToolWrapper>
        {TOOLS.map((tool, i) => {
          return (
            <ToolButton
              key={i}
              title={tool.title}
              onClick={() => setCurrentTool(tool.name)}
              selected={currentTool === tool.name ? true : false}
            >
              <ToolIcon position={tool.position} />
            </ToolButton>
          )
        })}
      </ToolWrapper>
      <ToolOptions />
    </ToolbarContainer>
  )
}
