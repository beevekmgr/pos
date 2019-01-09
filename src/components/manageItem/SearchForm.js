import React, { Component } from 'react';

export default class SearchForm extends Component {
	constructor() {
		super();
		this.state = {
			data: {
				product: '',
				quantity: ''
			}
		};
	}

	handleChange = (e) => {
		console.log('Called handlechange');
		let { data } = this.state;
		data[e.target.name] = e.target.value;
		this.setState({ data });
	};
	render() {
		return (
			<div>
				<div style={{ padding: '10px' }}>
					<div>
						<div>
							<input
								type="text"
								name="product"
								id="product"
								placeholder="Please input the item to search"
								onChange={this.handleChange}
								value={this.state.data.product}
							/>
							<input
								type="text"
								name="quantity"
								id="quantity"
								placeholder="category"
								onChange={this.handleChange}
								value={this.state.data.quantity}
							/>

							<button type="submit" className="button btn btn-primary">
								SEARCH
							</button>
						</div>
					</div>
				</div>
			</div>
		);
	}
}
