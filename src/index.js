import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import App from './App'
import LandingPage from './LandingPage'
import './style.css'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter basename='/mint-paint'>
      <Routes>
        <Route path='/about' element={<LandingPage />} />
        <Route path='/' element={<App />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
)
