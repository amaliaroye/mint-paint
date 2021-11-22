import React, { useState } from 'react'
import styled from 'styled-components'
import Canvas from './Canvas'
import Menu from './Menu'
import Palette from './Palette'
import Toolbar from './Toolbar'

const Container = styled.div`
  display: flex;
  flex-direction: row;
`

export default function App() {
  const [foreground, setForeground] = useState('#000000')
  const [background, setBackground] = useState('#ffffff')
  const [currentTool, setCurrentTool] = useState('BRUSH')

  return (
    <>
      <Menu />
      <Container>
        <Toolbar currentTool={currentTool} setCurrentTool={setCurrentTool} />
        <Canvas
          foreground={foreground}
          background={background}
          currentTool={currentTool}
        />
      </Container>
      <Palette
        foreground={foreground}
        background={background}
        setForeground={setForeground}
        setBackground={setBackground}
      />
    </>
  )
}
