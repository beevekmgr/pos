import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './screens/Login';
import Routes from './Routes'

import './App.css';

// const {app} = window.require('electron').remote;

class App extends Component {
	render() {
		return (
			<div className = "window">
			<Switch>
				<Route exact path="/login" component={Login} />
				<Route path = "/app" component = {Routes} />
			</Switch>
			</div>
		);
	}
}

export default App;
