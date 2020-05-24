import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component {
	render() {
		return (
			<div className="Navbar">
				<NavLink exact activeClassName="Navbar-active" to="/">
					Home
				</NavLink>
				<NavLink exact activeClassName="Navbar-active" to="/sweetpotatochips">
					Sweet Potato Chips
				</NavLink>
				<NavLink exact activeClassName="Navbar-active" to="/darkchocolate">
					Dark Chocolate
				</NavLink>
				<NavLink exact activeClassName="Navbar-active" to="/dietcola">
					Diet Cola
				</NavLink>
			</div>
		);
	}
}

export default Navbar;
