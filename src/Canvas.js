import React, { useRef, useState } from 'react'
import { Stage, Layer, Line, Rect } from 'react-konva'

export default function Canvas({ currentColor }) {
  const isDrawing = useRef(false)
  const [lines, setLines] = useState([])

  const handleMouseDown = (event) => {
    isDrawing.current = true
    const mousePosition = event.target.getStage().getPointerPosition()
    setLines([...lines, { points: [mousePosition.x, mousePosition.y] }])
  }

  const handleMouseUp = () => {
    isDrawing.current = false
  }

  const handleMouseMove = (event) => {
    if (!isDrawing.current) return

    const stage = event.target.getStage()
    const point = stage.getPointerPosition()
    let lastLine = lines[lines.length - 1]
    lastLine.points = lastLine.points.concat([point.x, point.y])

    // replace last
    lines.splice(lines.length - 1, 1, lastLine)
    setLines(lines.concat())
  }

  return (
    <div>
      <Stage
        width={500}
        height={500}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={currentColor}
              strokeWidth={5}
              tension={0.5}
              lineCap='round'
            />
          ))}
        </Layer>
      </Stage>
    </div>
  )
}
