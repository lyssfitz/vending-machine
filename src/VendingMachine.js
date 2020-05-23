import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class VendingMachine extends Component {
	render() {
		return (
			<div>
				<h1>Vending Machine</h1>
				<Link exact to="/sweetpotatochips">
					Sweet Potato Chips
				</Link>
				<Link exact to="/darkchocolate">
					Dark Chocolate
				</Link>
				<Link exact to="/dietcola">
					Diet Cola
				</Link>
			</div>
		);
	}
}

export default VendingMachine;
