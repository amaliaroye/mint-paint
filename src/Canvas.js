import React, { useReducer, useRef, useState } from 'react'
import styled from 'styled-components'
import { Stage, Layer, Line, Rect, Shape } from 'react-konva'
import { toolReducer as reducer } from './toolReducer'

const STAGE_WIDTH = 500
const STAGE_HEIGHT = 500

const CanvasWrapper = styled.div`
  background-color: var(--med-gray);
  width: 100%;
`

export default function Canvas({
  foreground,
  background,
  currentTool,
  toolOptions,
  setCursorPosition,
}) {
  const isDrawing = useRef(false)
  const [lines, dispatch] = useReducer(reducer, [])
  const stageRef = useRef(null)

  const handleMouseDown = (event) => {
    isDrawing.current = true
    const mousePosition = event.target.getStage().getPointerPosition()
    dispatch({
      type: `START_${currentTool}`,
      payload: {
        point: mousePosition,
        foreground: foreground,
        background: background,
        tool: currentTool,
        options: toolOptions,
      },
    })
  }

  const handleMouseUp = () => {
    isDrawing.current = false
  }

  const handleMouseMove = (event) => {
    const stage = stageRef.current.getStage()
    const mousePosition = stage.getPointerPosition()
    setCursorPosition(mousePosition)

    if (!isDrawing.current) return

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
        ref={stageRef}
      >
        <Layer>
          <Rect width={STAGE_WIDTH} height={STAGE_HEIGHT} fill={background} />
        </Layer>

        <Layer>
          {lines.map((line, i) => (
            <Line
              key={i}
              points={line.points}
              stroke={line.color || foreground}
              strokeWidth={line.strokeWidth}
              tension={0.5}
              lineCap='square'
              globalCompositeOperation={
                line.tool === 'ERASER' ? 'destination-out' : 'source-over'
              }
            />
          ))}
        </Layer>
      </Stage>
    </CanvasWrapper>
  )
}
