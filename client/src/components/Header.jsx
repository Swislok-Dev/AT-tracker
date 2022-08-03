import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <header className='header'>
      <h2>Flight Tracker</h2>

      <ul className='nav-list'>
        <li>
          <NavLink className='nav-item' to='/'>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-item' to='/flights'>
            Flights
          </NavLink>
        </li>
        <li>
          <NavLink className='nav-item' to='/airports'>
            Airports
          </NavLink>
        </li>
      </ul>
      <hr />
    </header>
  )
}

export default Header
