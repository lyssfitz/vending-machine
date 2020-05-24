import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class SweetPotatoChips extends Component {
	render() {
		return (
			<div>
				<Message>
					<h1>Sweet Potato Chips</h1>
					<Link to="/">Go Back</Link>
				</Message>
			</div>
		);
	}
}

export default SweetPotatoChips;
