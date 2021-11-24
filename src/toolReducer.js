/*
  https://konvajs.org/api/Konva.Shape.html
  `shapes`: array of shape attributes saved in state to pass to renderer

  config: {
    id: string,
    listening: boolean,
    fill: string,
    fillEnabled: boolean,
    stroke: string,
    strokeEnabled: boolean,
    strokeWidth: number,
    lineCap: 'butt','round', or 'square,


  }

  <Shape
    sceneFunc={(context,shape) => {
      context.beginPath();
      context.moveTo(20, 50);
      context.lineTo(220, 80);
      context.quadraticCurveTo(150, 100, 260, 170);
      context.closePath();
      // (!) Konva specific method, it is very important
      context.fillStrokeShape(shape);
    }
  />


*/
/*

  ERASER: shape.globalCompositeOperation('destination-out');

*/

// pass in state and action into reducer
export function toolReducer(lines, { type, payload }) {
  let lastLine = lines[lines.length - 1]
  switch (type) {
    case 'START_BRUSH':
    case 'START_PENCIL':
      return [
        ...lines,
        {
          tool: payload.tool,
          color: payload.foreground,
          points: [payload.point.x, payload.point.y],
          strokeWidth: payload.options.strokeWidth,
        },
      ]
    case 'START_ERASER':
      return [
        ...lines,
        {
          tool: payload.tool,
          points: [payload.point.x, payload.point.y],
          strokeWidth: payload.options.strokeWidth,
        },
      ]
    case 'CONTINUE_PENCIL':
    case 'CONTINUE_BRUSH':
    case 'CONTINUE_ERASER':
      lastLine.points = lastLine.points.concat([
        payload.point.x,
        payload.point.y,
      ])

      lines.splice(lines.length - 1, 1, lastLine)
      return lines.concat()
    /* case 'START_LINE':
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
      return lines.concat() */

    default:
      break
  }
}
