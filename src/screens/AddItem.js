import React, { Component } from 'react';
import Home from '../components/additem/screens/index';
import AddItemForm from '../components/additem/screens/AddItemForm';
import AddCategoryForm from '../components/additem/screens/AddCategoryForm';
import AddSupplierForm from '../components/additem/screens/AddSupplierForm';
import { Route,} from 'react-router-dom';

export default class AddItem extends Component {
	render() {
		const { pathname } = this.props.location;
		return (
			<div>
				<header className="toolbar toolbar-header">
					<h1 className="title">Add an Item</h1>
				</header>
				<Route exact path={'/app/addItem'} component={Home} />
				<Route path="/app/addItem/addItemForm" component={AddItemForm} />
				<Route path="/app/addItem/addCategoryForm" component={AddCategoryForm} />
				<Route path="/app/addItem/addSupplierForm" component={AddSupplierForm} />\
				
			</div>
		);
	}
}
