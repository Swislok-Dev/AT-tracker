import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home.jsx'
import Header from './components/Header.jsx'

function App() {
  return (
    <div className='App'>
      <Header />

      <Routes>
        <Route path='/' element={<Home /> } />
      </Routes>
    </div>
  )
}

export default App
