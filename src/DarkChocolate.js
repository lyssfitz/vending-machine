import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DarkChocolate extends Component {
	render() {
		return (
			<div>
				<h1>Dark Chocolate</h1>
				<Link to="/">Go Back</Link>
			</div>
		);
	}
}

export default DarkChocolate;
