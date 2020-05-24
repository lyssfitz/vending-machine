import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Message from './Message';

class VendingMachine extends Component {
	render() {
		return (
			<div>
				<Message>
					<h1>Hello! I am a Vending Machine! What would you like to eat?</h1>
				</Message>
				<Message>
					<Link exact to="/sweetpotatochips">
						Sweet Potato Chips
					</Link>
					<Link exact to="/darkchocolate">
						Dark Chocolate
					</Link>
					<Link exact to="/dietcola">
						Diet Cola
					</Link>
				</Message>
			</div>
		);
	}
}

export default VendingMachine;
