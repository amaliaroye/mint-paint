import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './shared/Button'
import TitleBar from './shared/TitleBar'

export default function LandingPage() {
  return (
    <PageContainer>
      <WindowCard>
        <TitleBar
          text='Mint Paint'
          buttons={['minimize', 'maximize', 'close']}
        />
        <WindowContent>
          <p>
            Mint Paint is a browser-based paint application based on the Windows
            98 Paint program made for a{' '}
            <a href='https://tinyurl.com/yz4p8344'>one-week hackathon</a> with{' '}
            <a href='https://mintbean.io/'>Mintbean</a>.
          </p>
          <FieldRow align='flex-end'>
            <Link to='/'>
              <Button>Check out the live demo!</Button>
            </Link>
            <a
              href='https://github.com/amaliaroye/mint-paint'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Github Repo</Button>
            </a>
          </FieldRow>
        </WindowContent>
      </WindowCard>

      <WindowCard>
        <TitleBar
          text='Technologies'
          buttons={['minimize', 'maximize', 'close']}
        />
        <WindowContent>
          <ul>
            <li>React</li>
            <li>Konva/React-Konva</li>
            <li>Styled Components</li>
          </ul>
        </WindowContent>
        <StatusBar>
          <StatusField>I am a status</StatusField>
        </StatusBar>
      </WindowCard>

      <WindowCard>
        <TitleBar
          text='Meet the Maker!'
          buttons={['minimize', 'maximize', 'close']}
        />
        <WindowContent>
          <p>Made by Amalia Advincula-Roye</p>
          <FieldRow align='flex-end'>
            <strong>Find me around the web!</strong>
            <a
              href='https://amaliaroye.github.io/'
              target='_blank'
              rel='noreferrer'
            >
              <Button>Portfolio</Button>
            </a>
            <a
              href='https://github.com/amaliaroye'
              target='_blank'
              rel='noreferrer'
            >
              <Button>GitHub</Button>
            </a>
            <a
              href='https://www.linkedin.com/in/amalia-advincula-roye/'
              target='_blank'
              rel='noreferrer'
            >
              <Button>LinkedIn</Button>
            </a>
          </FieldRow>
          <address>
            Or contact me at{' '}
            <a href='mailto:amaliaroye@gmail.com'>amaliaroye@gmail.com</a>
          </address>
        </WindowContent>
      </WindowCard>
    </PageContainer>
  )
}

const PageContainer = styled.div`
  background-color: var(--bg-desktop);
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const WindowCard = styled.section`
  background-color: var(--surface);
  padding: 3px;
  box-shadow: var(--border-window-outer), var(--border-window-inner);
  width: 500px;
  margin: 1rem;
`

const WindowContent = styled.div`
  margin: var(--element-spacing);
`

const StatusBar = styled.div`
  margin: 0px 1px;
  display: flex;
  gap: 1px;
`

const StatusField = styled.p`
  margin: 0;
  box-shadow: inset -1px -1px #dfdfdf, inset 1px 1px #808080;
  flex-grow: 1;
  padding: 2px 3px;
  margin: 0;
`

const FieldRow = styled.section`
  display: flex;
  align-items: center;
  margin-top: var(--grouped-element-spacing);
  margin-bottom: var(--grouped-element-spacing);
  justify-content: ${(props) => props.align};

  & > * {
    margin-left: var(--grouped-element-spacing);
  }
`
