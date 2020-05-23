import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class DietCola extends Component {
	render() {
		return (
			<div>
				<h1>Diet Cola</h1>
				<Link to="/">Go Back</Link>
			</div>
		);
	}
}

export default DietCola;
