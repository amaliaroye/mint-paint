import React from 'react'
import styled from 'styled-components'

/*
<Tooltip text=''>
  <Component to add tooltip to/>
</Tooltip>
*/

export default function Tooltip({ text, children }) {
  return (
    <TooltipWrapper>
      <TooltipContent>{text}</TooltipContent>
    </TooltipWrapper>
  )
}

const TooltipWrapper = styled.div`
  position: relative;
  display: inline-block;
`

const TooltipContent = styled.p`
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: white;
  text-align: center;
  padding: 5px 0;
  border-radius: 6px;
  position: absolute;
  z-index: 1;
`
