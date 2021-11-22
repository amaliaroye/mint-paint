import React, { useState } from 'react'
import styled from 'styled-components'

const COLORS = [
  '#000000',
  '#7C7D7E',
  '#7F0307',
  '#828207',
  '#078102',
  '#047B7B',
  '#010572',
  '#7F0078',
  '#787E3C',
  '#043A3A',
  '#017EFF',
  '#06397C',
  '#360EC4',
  '#673C17',
  '#FFFFFF',
  '#BDBDBD',
  '#F90304',
  '#F9FE00',
  '#00FB03',
  '#0DFDF8',
  '#0401F9',
  '#F804F9',
  '#FBFE82',
  '#05FD7C',
  '#76FFFA',
  '#7B7CFE',
  '#FC047C',
  '#FE7C36',
]
const SWATCH_SIZE = 24

const Swatch = styled.button`
  width: ${SWATCH_SIZE}px;
  height: ${SWATCH_SIZE}px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  border-style: inset;
`

const CurrentSwatch = styled(Swatch)`
  grid-column: ${(props) => (props.foreground ? '1 / span 2' : '2 / span 2')};
  grid-row: ${(props) => (props.foreground ? '1 / span 2' : '2 / span 2')};
  z-index: ${(props) => (props.active ? 5 : 4)};
`

const CurrentWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, calc((${SWATCH_SIZE} / 2) * 1px));
  grid-template-rows: repeat(3, calc((${SWATCH_SIZE} / 2) * 1px));
  background-color: var(--light-gray);
  padding: 6px;
  border-style: inset;
`

const SwatchWrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(14, 1fr);
  gap: 3px;
`

const PaletteWrapper = styled.div`
  position: sticky;
  bottom: 0;
  display: flex;
  align-items: center;
  background-color: var(--gray);
  padding: 4px;
  gap: 12px;
`

export default function Palette({
  foreground,
  background,
  setForeground,
  setBackground,
}) {
  const [current, setCurrent] = useState('foreground')

  return (
    <PaletteWrapper>
      <CurrentWrapper>
        <CurrentSwatch
          foreground
          active={current === 'foreground' ? true : false}
          color={foreground}
          onClick={() => setCurrent('foreground')}
        />
        <CurrentSwatch
          background
          active={current === 'background: ' ? true : false}
          color={background}
          onClick={() => setCurrent('background')}
        />
      </CurrentWrapper>

      <SwatchWrapper>
        {COLORS.map((color, i) => {
          return (
            <Swatch
              key={i}
              color={color}
              onClick={() => {
                current === 'foreground'
                  ? setForeground(color)
                  : setBackground(color)
              }}
            />
          )
        })}
      </SwatchWrapper>
    </PaletteWrapper>
  )
}
