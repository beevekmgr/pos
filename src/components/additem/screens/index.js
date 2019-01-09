import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as FontAwesome from 'react-icons/fa';

export default class Home extends Component {
	render() {
		const { pathname } = this.props.location;
		console.log({ pathname });
		return (
			<div>
				<div className="box-container">
					<Link to={`/app/addItem/addItemForm`} className="box btn btn-primary">
						<div className="icon">
							<FontAwesome.FaPlus />
						</div>
						Add new Item
					</Link>{' '}
					<Link to="/app/addItem/addCategoryForm" className="box btn btn-positive">
						<div className="icon">
							<FontAwesome.FaPlus />
						</div>
						Add Category
					</Link>{' '}
					<Link to="/app/addItem/addSupplierForm" className="box btn btn-negative">
						<div className="icon">
							<FontAwesome.FaPlus />
						</div>
						New Supplier
					</Link>{' '}
				</div>
			</div>
		);
	}
}
