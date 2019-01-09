import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { SERVER } from '../../../constants/index';
import './form.css';
import { addItem, resetAddItem } from '../../../actions';
import InlineError, { InlineSuccess } from '../../inlineMessage';

class AddItemForm extends Component {
	constructor() {
		super();
		this.state = {
			data: {
				name: '',
				unit: '',
				barcode: '',
				category: '',
				supplier: '',
				quantity: '',
				costPrice: '',
				sellingPrice: '',
				discountPercent: '',
				description: ''
			},
			errors: {
				name: '',
				barcode: '',
				category: '',
				supplier: '',
				quantity: '',
				costPrice: '',
				sellingPrice: '',
				discountPercent: '',
				description: ''
			},
			categories: [],
			suppliers: [],
			units: []
		};
	}
	async componentWillMount() {
		this.props.resetAddItem();
		const responseCategories = await axios.post(`${SERVER}/category/getCategories`);
		const { categories } = responseCategories.data;
		const responseSuppliers = await axios.post(`${SERVER}/supplier/getSuppliers`);
		const { suppliers } = responseSuppliers.data;
		const responseUnits = await axios.post(`${SERVER}/product/getUnits`);
		const { units } = responseUnits.data;
		this.setState({ categories, suppliers, units });
	}

	handleChange = (e) => {
		this.setState({
			data: {
				...this.state.data,
				[e.target.name]: e.target.value
			}
		});
	};

	handleSubmit = (e) => {
		const initialdata = {
			name: '',
			barcode: '',
			category: '',
			supplier: '',
			quantity: '',
			costPrice: '',
			sellingPrice: '',
			discountPercent: '',
			description: ''
		};
		const { addItem } = this.props;
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors }, () => {
			// console.log(Object.keys(this.state.errors));
			if (Object.keys(this.state.errors).length === 0) {
				this.setState({ data: initialdata });
				addItem(this.state.data);
				console.log('Valid lmao');
			}
		});
	};

	validate = ({
		name,
		barcode,
		category,
		supplier,
		quantity,
		costPrice,
		sellingPrice,
		discountPercent,
		description
	}) => {
		const errors = {};
		if (name.trim().length < 6) errors.name = 'The length of name is less';
		if (barcode.trim().length < 6 || !/^\d+$/.test(barcode)) errors.barcode = 'The length of barcode is less';
		if (category.trim().length < 1) errors.category = 'Supplier is required';
		if (supplier.trim().length < 1) errors.supplier = 'Category is required';
		if (quantity.trim().length < 1 || !/^\d+$/.test(quantity))
			errors.quantity = 'Quantity is required and should be in number';
		if (costPrice.trim().length < 1 || !/^\d+$/.test(costPrice))
			errors.costPrice = 'Cost price is required and should be in number';
		if (sellingPrice.trim().length < 6 || !/^\d+$/.test(costPrice))
			errors.sellingPrice = 'Selling price is required and should be in number';
		if (!/^\d+$/.test(costPrice)) errors.discountPercent = 'Discount percent should be number';

		return errors;
	};
	render() {
		const { item } = this.props;
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<div className="heading">Please fill up the form to add an item</div>
				{item.success ? <InlineSuccess message={item.message} /> : <InlineError message={item.message} />}
				<div className="form-group">
					{this.state.errors.name && <InlineError message={this.state.errors.name} />}
					{/* <label>Items name</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Items name"
						name="name"
						value={this.state.data.name}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					{this.state.errors.category && <InlineError message={this.state.errors.category} />}
					{/* <label>Category</label> */}
					<select
						name="unit"
						className="form-control"
						onChange={this.handleChange}
						value={this.state.data.unit}
						required
					>
						<option value="" hidden>
							Select a unit
						</option>
						{this.state.units.map((unit) => (
							<option value={unit['_id']} key={unit['_id']}>
								{unit.unit}
							</option>
						))}
					</select>
					{/* <input
						type="text"
						className="form-control"
						placeholder="Category"
						name="category"
						value={this.state.data.category}
						onChange={this.handleChange}
					/> */}
				</div>
				<div className="form-group">
					{this.state.errors.barcode && <InlineError message={this.state.errors.barcode} />}
					{/* <label>Items name</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Items name"
						name="barcode"
						value={this.state.data.barcode}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					{this.state.errors.category && <InlineError message={this.state.errors.category} />}
					{/* <label>Category</label> */}
					<select
						name="category"
						className="form-control"
						onChange={this.handleChange}
						value={this.state.data.category}
						required
					>
						<option value="" hidden>
							Select a category
						</option>
						{this.state.categories.map((category) => (
							<option value={category['_id']} key={category['_id']}>
								{category.name}
							</option>
						))}
					</select>
					{/* <input
						type="text"
						className="form-control"
						placeholder="Category"
						name="category"
						value={this.state.data.category}
						onChange={this.handleChange}
					/> */}
				</div>
				<div className="form-group">
					{this.state.errors.supplier && <InlineError message={this.state.errors.supplier} />}
					{/* <label>Supplier</label> */}
					<select
						name="supplier"
						className="form-control"
						onChange={this.handleChange}
						value={this.state.data.supplier}
						required
					>
						<option value="" hidden>
							Select a supplier
						</option>
						{this.state.categories.map((supplier) => (
							<option value={supplier['_id']} key={supplier['_id']}>
								{supplier.name}
							</option>
						))}
					</select>
					{/* <input
						type="text"
						className="form-control"
						placeholder="Supplier"
						name="supplier"
						value={this.state.data.supplier}
						onChange={this.handleChange}
					/> */}
				</div>
				<div className="form-group">
					{this.state.errors.quantity && <InlineError message={this.state.errors.quantity} />}
					{/* <label>Quantity</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Quantity"
						name="quantity"
						value={this.state.data.quantity}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					{this.state.errors.costPrice && <InlineError message={this.state.errors.costPrice} />}
					{/* <label>Cost price</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Cost price"
						name="costPrice"
						value={this.state.data.costPrice}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					{this.state.errors.sellingPrice && <InlineError message={this.state.errors.sellingPrice} />}
					{/* <label>Selling price</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Selling price"
						name="sellingPrice"
						value={this.state.data.sellingPrice}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					{this.state.errors.discountPercent && <InlineError message={this.state.errors.discountPercent} />}
					{/* <label>Discount Amount</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Discount percent"
						name="discountPercent"
						value={this.state.data.discountPercent}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					{/* <label>Image</label> */}
					{/* <input
						type="file"
						className="form-control"
						placeholder="Image"
						name="name"
						value={this.state.data.name}
						onChange={this.handleChange}
					/> */}
				</div>
				<div className="form-group">
					{this.state.errors.description && <InlineError message={this.state.errors.description} />}
					{/* <label>Description</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Description"
						name="description"
						value={this.state.data.description}
						onChange={this.handleChange}
					/>
				</div>
				<button type="submit" className="btn btn-primary">
					ADD ITEM
				</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	item: state.item
});
const mapActionToProps = (dispatch) => ({
	addItem: (value) => dispatch(addItem(value)),
	resetAddItem: () => dispatch(resetAddItem())
});

export default connect(mapStateToProps, mapActionToProps)(AddItemForm);
