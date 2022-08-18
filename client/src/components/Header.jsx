import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <h1>
        <NavLink to='/' className='header-link'>
          Flight Tracker
        </NavLink>
      </h1>

    </header>
  )
}

export default Header
