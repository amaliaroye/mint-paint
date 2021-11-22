import React from 'react'
import { Line } from 'react-konva'

export default function Brush({ points, color, strokeWidth }) {
  return (
    <Line
      points={points}
      stroke={color}
      strokeWidth={strokeWidth}
      tension={0.5}
      lineCap='square'
    />
  )
}
