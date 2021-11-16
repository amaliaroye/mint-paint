import React, { useState } from 'react'
import Canvas from './Canvas'
import Palette from './Palette'

export default function App() {
  const [foreground, setForeground] = useState('#000000')
  const [background, setBackground] = useState('#ffffff')
  return (
    <div>
      <Canvas currentColor={foreground} />
      <Palette
        foreground={foreground}
        background={background}
        setForeground={setForeground}
        setBackground={setBackground}
      />
    </div>
  )
}
