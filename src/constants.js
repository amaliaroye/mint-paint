export const TOOLS = [
  {
    name: 'FREEFORM_SELECT',
    title: 'Free-form Select',
    position: '0',
    options: { method: ['opaque', 'transparent'] },
    disabled: true,
  },
  {
    name: 'MARQUEE_SELECT',
    title: 'Marquee Select',
    position: '-16px',
    options: { method: ['opaque', 'transparent'] },
    disabled: true,
  },
  {
    name: 'ERASER',
    title: 'Eraser',
    position: '-32px',
    options: { strokeWidth: 5 },
    disabled: false,
  },
  {
    name: 'PAINT_BUCKET',
    title: 'Paint Bucket',
    position: '-48px',
    options: {},
    disabled: true,
  },
  {
    name: 'EYEDROPPER',
    title: 'Eyedropper',
    position: '-64px',
    options: {},
    disabled: true,
  },
  {
    name: 'ZOOM',
    title: 'Zoom',
    position: '-80px',
    options: { amount: [1, 2, 6, 8] },
    disabled: true,
  },
  {
    name: 'PENCIL',
    title: 'Pencil',
    position: '-96px',
    options: { strokeWidth: 1 },
    disabled: false,
  },
  {
    name: 'BRUSH',
    title: 'Brush',
    position: '-112px',
    options: {
      strokeWidth: 5,
      strokeType: 'square',
    },
    disabled: false,
  },
  {
    name: 'AIRBRUSH',
    title: 'Airbrush',
    position: '-128px',
    options: { size: [0, 1, 2] },
    disabled: true,
  },
  {
    name: 'TEXT',
    title: 'Text',
    position: '-144px',
    options: { method: ['opaque', 'transparent'] },
    disabled: true,
  },
  {
    name: 'LINE',
    title: 'Line',
    position: '-160px',
    options: { strokeWidth: [1, 2, 3, 4, 5] },
    disabled: true,
  },
  {
    name: 'CURVE',
    title: 'Curve',
    position: '-176px',
    options: { strokeWidth: [1, 2, 3, 4, 5] },
    disabled: true,
  },
  {
    name: 'RECTANGLE',
    title: 'Rectangle',
    position: '-192px',
    options: { type: ['stroke', 'both', 'fill'] },
    disabled: true,
  },
  {
    name: 'POLYGON',
    title: 'Polygon',
    position: '-208px',
    options: { type: ['stroke', 'both', 'fill'] },
    disabled: true,
  },
  {
    name: 'ELLIPSE',
    title: 'Ellipse',
    position: '-224px',
    options: { type: ['stroke', 'both', 'fill'] },
    disabled: true,
  },
  {
    name: 'ROUNDED_RECTANGLE',
    title: 'Rounded Rectangle',
    position: '-240px',
    options: { type: ['stroke', 'both', 'fill'] },
    disabled: true,
  },
]