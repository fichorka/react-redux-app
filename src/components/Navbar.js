import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar">
				<Link to="/" >Home</Link>
				<Link to="/roles" >Roles</Link>
				<Link to="/employees" >Employees</Link>
			</nav>
		)
	}
}

export default Navbar