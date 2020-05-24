import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import VendingMachine from './VendingMachine';
import SweetPotatoChips from './SweetPotatoChips';
import DietCola from './DietCola';
import DarkChocolate from './DarkChocolate';
import './App.css';
import Navbar from './Navbar';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Navbar />
				<Switch>
					<Route exact path="/" render={() => <VendingMachine />} />
					<Route exact path="/sweetpotatochips" render={() => <SweetPotatoChips />} />
					<Route exact path="/darkchocolate" render={() => <DarkChocolate />} />
					<Route exact path="/dietcola" render={() => <DietCola />} />
				</Switch>
			</div>
		);
	}
}

export default App;
