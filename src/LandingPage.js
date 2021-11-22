import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import logo from './assets/logo.png'

const PageContainer = styled.div`
  background-color: var(--bg-desktop);
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const WindowCard = styled.div`
  background-color: var(--neutral-300);
  padding: 3px;
  border: 1px solid var(--outset-border);
  width: 500px;
  margin: 1rem;
`

const TitleBar = styled.div`
  background-color: var(--blue-400);
  color: var(--neutral-100);
  padding: 3px 2px 3px 3px;
`

const WindowContent = styled.div`
  margin: 8px;
`

export default function LandingPage() {
  return (
    <PageContainer>
      {/* <img src={logo} alt='Paint logo' /> */}
      <WindowCard>
        <TitleBar>Technologies</TitleBar>
        <WindowContent>
          <ul>
            <li>React</li>
            <li>Konva</li>
          </ul>
        </WindowContent>
      </WindowCard>

      <WindowCard>
        <TitleBar>Links</TitleBar>
        <WindowContent>
          <Link to='/'>Demo</Link>
          <a href='https://github.com/amaliaroye/mint-paint'>Github</a>
        </WindowContent>
      </WindowCard>
    </PageContainer>
  )
}
