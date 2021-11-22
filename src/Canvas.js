import React, { useReducer, useRef, useState } from 'react'
import styled from 'styled-components'
import { Stage, Layer, Line, Rect } from 'react-konva'

const STAGE_WIDTH = 500
const STAGE_HEIGHT = 500

const CanvasWrapper = styled.div`
  background-color: var(--med-gray);
  width: 100%;
`

// pass in state and action into reducer
function reducer(lines, { type, payload }) {
  let lastLine = lines[lines.length - 1]
  switch (type) {
    case 'START_BRUSH':
      return [
        ...lines,
        {
          tool: payload.tool,
          color: payload.foreground,
          points: [payload.point.x, payload.point.y],
        },
      ]
    case 'CONTINUE_BRUSH':
      lastLine.points = lastLine.points.concat([
        payload.point.x,
        payload.point.y,
      ])

      lines.splice(lines.length - 1, 1, lastLine)
      return lines.concat()
    case 'START_LINE':
      return [
        ...lines,
        {
          tool: payload.tool,
          color: payload.foreground,
          points: [payload.point.x, payload.point.y],
        },
      ]
    case 'CONTINUE_LINE':
      lastLine.points[2] = payload.point.x
      lastLine.points[3] = payload.point.y

      lines.splice(lines.length - 1, 1, lastLine)
      return lines.concat()

    default:
      break
  }
}

export default function Canvas({ foreground, currentTool }) {
  const isDrawing = useRef(false)
  const [lines, dispatch] = useReducer(reducer, [])

  const handleMouseDown = (event) => {
    isDrawing.current = true
    const mousePosition = event.target.getStage().getPointerPosition()
    dispatch({
      type: `START_${currentTool}`,
      payload: {
        point: mousePosition,
        foreground: foreground,
        tool: currentTool,
      },
    })
  }

  const handleMouseUp = (event) => {
    isDrawing.current = false
    const mousePosition = event.target.getStage().getPointerPosition()
    // dispatch({
    //   type: `END_${currentTool}`,
    //   payload: {
    //     point: mousePosition,
    //     foreground: foreground,
    //     tool: currentTool,
    //   },
    // })
  }

  const handleMouseMove = (event) => {
    if (!isDrawing.current) return

    const mousePosition = event.target.getStage().getPointerPosition()
    dispatch({
      type: `CONTINUE_${currentTool}`,
      payload: { point: mousePosition },
    })
  }

  return (
    <CanvasWrapper>
      <Stage
        width={STAGE_WIDTH}
        height={STAGE_HEIGHT}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      >
        <Layer>
          <Rect width={STAGE_WIDTH} height={STAGE_HEIGHT} fill='#ffffff' />
        </Layer>
        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color}
              strokeWidth={5}
              tension={0.5}
              lineCap='square'
            />
          ))}
        </Layer>
      </Stage>
    </CanvasWrapper>
  )
}
