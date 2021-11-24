import React, { useState } from 'react'
import styled from 'styled-components'
import Canvas from './Canvas'
import Menu from './Menu'
import Palette from './Palette'
import Toolbar from './Toolbar'
import TitleBar from './shared/TitleBar'
import StatusBar from './shared/StatusBar'

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction};
  height: 100vh;
`

export default function App() {
  const [foreground, setForeground] = useState('#000000')
  const [background, setBackground] = useState('#ffffff')
  const [currentTool, setCurrentTool] = useState('BRUSH')
  const [toolOptions, setToolOptions] = useState({ strokeWidth: 5 })
  const [cursorPosition, setCursorPosition] = useState({ x: '', y: '' })

  return (
    <Container direction='column'>
      <TitleBar text='untitled' buttons={['minimize', 'maximize', 'close']} />
      <Menu />
      <Container direction='row'>
        <Toolbar
          currentTool={currentTool}
          setCurrentTool={setCurrentTool}
          toolOptions={toolOptions}
          setToolOptions={setToolOptions}
        />
        <Canvas
          foreground={foreground}
          background={background}
          currentTool={currentTool}
          toolOptions={toolOptions}
          setCursorPosition={setCursorPosition}
        />
      </Container>
      <Palette
        foreground={foreground}
        background={background}
        setForeground={setForeground}
        setBackground={setBackground}
      />
      <StatusBar
        fields={[
          "Note: Most of these buttons don't do anything yet!",
          `${cursorPosition.x}, ${cursorPosition.y}`,
        ]}
      />
    </Container>
  )
}
