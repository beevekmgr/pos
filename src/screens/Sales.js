import React, { Component } from 'react';
import SaleForm from '../components/sales/SaleForm';
import ItemTable from '../components/sales/ItemTable';
import Cards from '../components/sales/Cards';
import FinalizeSale from '../components/sales/FinalizeSale';

export default class Sales extends Component {
	render() {
		return (
			<div>


				<SaleForm />

				<ItemTable />

				<Cards />
					
				<FinalizeSale />
			</div>
		);
	}
}
