import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class DarkChocolate extends Component {
	render() {
		return (
			<div>
				<Message>
					<h1>Dark Chocolate</h1>
					<Link to="/">Go Back</Link>
				</Message>
			</div>
		);
	}
}

export default DarkChocolate;
