import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SweetPotatoChips extends Component {
	render() {
		return (
			<div>
				<h1>Sweet Potato Chips</h1>
				<Link to="/">Go Back</Link>
			</div>
		);
	}
}

export default SweetPotatoChips;
