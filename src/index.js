import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import LandingPage from './LandingPage'
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename='/'>
      <Routes>
        <Route path='/about' element={<LandingPage />} />
        <Route exact path='/' element={<App />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
