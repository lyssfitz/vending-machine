import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class DietCola extends Component {
	render() {
		return (
			<div>
				<Message>
					<h1>Diet Cola</h1>
					<Link to="/">Go Back</Link>
				</Message>
			</div>
		);
	}
}

export default DietCola;
