import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom'

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<NavLink exact to="/" activeClassName="active" >Home</NavLink>
				<NavLink to="/roles" activeClassName="active" >Roles</NavLink>
				<NavLink to="/employees" activeClassName="active" >Employees</NavLink>
			</nav>
		)
	}
}

export default Navbar