import React, { Component } from 'react';
import SearchForm from './SearchForm';
import ItemTable from './ItemTable';

export default class Content extends Component {
	
	render() {
		return (
			<div>
				<SearchForm />
        <ItemTable/>
			</div>
		);
	}
}
