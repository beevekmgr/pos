import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Dashboard from './screens/Dashboard';
import Sales from './screens/Sales';
import AddItem from './screens/AddItem';
import ManageItem from './screens/ManageItem';
import Header from './components/dashboard/Header';

export default () => {
	return (
		<div>
			<Header />
			<Switch>
				<Route path="/app/sales" component={Sales} />
				<Route path="/app/addItem" component={AddItem} />
				<Route path="/app/manageItem" component={ManageItem} />
				<Route path="/app" component={Dashboard} />
			
			</Switch>
		</div>
	);
};
