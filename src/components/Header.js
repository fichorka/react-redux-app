import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Header extends Component {
  handleThemeSwitch () {
    const currentClass = document.body.getAttribute('class') || ''
    if (currentClass.indexOf('dark') === -1) {
      document.body.setAttribute('class', 'dark')
    } else {
      document.body.setAttribute('class', '')
    }
  }

  render () {
    return (
      <header className='header'>
        <nav className='navbar'>
          <NavLink exact to='/' className='nav-link' activeClassName='active'>Home</NavLink>
          <NavLink to='/roles' className='nav-link' activeClassName='active'>Roles</NavLink>
          <NavLink to='/employees' className='nav-link' activeClassName='active'>Employees</NavLink>
        </nav>
        <div className='option-bar'>
          <span className='option' onClick={this.handleThemeSwitch}>switch theme</span>
        </div>
      </header>
    )
  }
}

export default Header
