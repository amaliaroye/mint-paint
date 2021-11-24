import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from './shared/Button'
import TitleBar from './shared/TitleBar'
import Image from './shared/Image'
import Fieldset from './shared/Fieldset'
import screenshot from './assets/screenshot.png'
import amalia from './assets/amalia.jpg'

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
            Are you feeling a bit nostalgic? Feeling like drawing programs
            nowadays have too many confusing features? Color palettes with more
            than 24 colors?! <i>Layers</i>? <i>Filters</i>? <i>Opacity</i>?!?!?!
            It's all <strong>too much</strong> sometimes.
          </p>
          <strong>
            Get transported back to the good ol` days of Y2K, almond-colored CRT
            monitors, and A/S/L on AIM with <Link to='/'>Mint Paint</Link>!
          </strong>
          <Fieldset>
            <Image src={screenshot} alt='Mint Paint App Screenshot' />
          </Fieldset>
          <p>
            <strong>Mint Paint</strong> is a browser-based paint application
            based on the classic Windows 95/98 Paint program. Made using React,
            Konva, and Styled Components for a{' '}
            <a
              href='https://tinyurl.com/yz4p8344'
              target='_blank'
              rel='noreferrer'
            >
              one-week hackathon
            </a>{' '}
            with{' '}
            <a href='https://mintbean.io/' target='_blank' rel='noreferrer'>
              Mintbean
            </a>
            .
          </p>
          <p>
            {' '}
            Check out the{' '}
            <a
              href='https://github.com/amaliaroye/mint-paint'
              target='_blank'
              rel='noreferrer'
            >
              Github Repo
            </a>{' '}
            for more information!
          </p>
          <FieldRow align='flex-end'>
            <Link to='/'>
              <Button>🢂 Check out the live demo! 🢀</Button>
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
        {/* <StatusBar>
          <StatusField>StatusBar!</StatusField>
        </StatusBar> */}
      </WindowCard>

      <WindowCard>
        <TitleBar text='Features' buttons={['minimize', 'maximize', 'close']} />
        <WindowContent>
          <Fieldset label='Current Features'>
            <ul>
              <li>Brush tool</li>
              <li>Pencil tool</li>
              <li>Eraser tool</li>
              <li>Change selected foreground color for tools</li>
              <li>Change canvas background color</li>
            </ul>
          </Fieldset>

          <Fieldset label='Planned Features'>
            <ul>
              <li>Undo/Redo</li>
              <li>Save/download drawing as image</li>
              <li>Select brush and eraser size</li>
              <li>Eyedropper tool</li>
              <li>Draw basic shapes (rectangle/rounded rectangle/ellipse)</li>
            </ul>
          </Fieldset>
        </WindowContent>
      </WindowCard>

      <WindowCard>
        <TitleBar
          text='Meet the Maker!'
          buttons={['minimize', 'maximize', 'close']}
        />
        <WindowContent>
          <FieldRow>
            <Image src={amalia} alt='Author Photo' width={75} round />
            <div>
              <p>Made by Amalia Advincula-Roye</p>
              <FieldRow align='flex-end'>
                {/* <strong>Find me around the web!</strong> */}
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
                <a href='mailto:amaliaroye@gmail.com'>amaliaroye@gmail.com</a>!
              </address>
            </div>
          </FieldRow>
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
  overflow-y: scroll;
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
