import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <h2>
        <NavLink to='/' className='header-link'>
          Flight Tracker
        </NavLink>
      </h2>

      <ul className='nav-list'>
        <NavLink className='nav-item' to='/'>
          Home
        </NavLink>

        <NavLink className='nav-item' to='/flights'>
          Flights
        </NavLink>

        <NavLink className='nav-item' to='/airports'>
          Airports
        </NavLink>
      </ul>
    </header>
  )
}

export default Header
