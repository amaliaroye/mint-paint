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
  border: 2px solid;
  border-color: var(--outset-border);
  width: 500px;
  margin: 1rem;
`

const TitleBar = styled.div`
  background-color: var(--blue-400);
  color: var(--neutral-100);
  padding: 3px;
`

const WindowContent = styled.div`
  margin: 8px;
`

const Button = styled.a`
  cursor: pointer;
  background-color: var(--neutral-300);
  border: 2px solid;
  border-color: var(--outset-border);
  padding: 3px;
  text-decoration: none;

  &:focus,
  &:active {
    border-color: var(--inset-border);
  }
`

export default function LandingPage() {
  return (
    <PageContainer>
      {/* <img src={logo} alt='Paint logo' /> */}

      <WindowCard>
        <TitleBar>Links</TitleBar>
        <WindowContent>
          <Link to='/'>
            <Button>Demo</Button>
          </Link>
          <Button
            href='https://github.com/amaliaroye/mint-paint'
            target='_blank'
            rel='noreferrer'
          >
            Github Repo
          </Button>
        </WindowContent>

        <WindowContent>
          <p>Made by Amalia Advincula-Roye</p>
          <Button
            href='https://amaliaroye.github.io/'
            target='_blank'
            rel='noreferrer'
          >
            Portfolio
          </Button>
          <Button
            href='https://github.com/amaliaroye'
            target='_blank'
            rel='noreferrer'
          >
            GitHub
          </Button>
          <Button
            href='https://www.linkedin.com/in/amalia-advincula-roye/'
            target='_blank'
            rel='noreferrer'
          >
            LinkedIn
          </Button>
        </WindowContent>
      </WindowCard>

      <WindowCard>
        <TitleBar>Technologies Used</TitleBar>
        <WindowContent>
          <ul>
            <li>React</li>
            <li>Konva</li>
            <li>Styled Components</li>
          </ul>
        </WindowContent>
      </WindowCard>
    </PageContainer>
  )
}
