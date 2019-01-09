import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import InlineError, { InlineSuccess } from '../../inlineMessage';
import { SERVER } from '../../../constants/index';
import { addCategory, resetAddCategory } from '../../../actions/index';

class AddCategoryForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				name: '',
				description: '',
				parentCategory: ''
			},
			errors: {
				name: '',
				description: '',
				parentCategory: ''
			},
			categories: [],
			
		};
	}

	async componentWillMount() {
		this.props.resetAddCategory();
		const response = await axios.post(`${SERVER}/category/getCategories`);
		const { categories } = response.data;
		this.setState({ categories });
	}
	handleChange = (e) => {
		this.setState({
			data: {
				...this.state.data,
				[e.target.name]: e.target.value
			}
		});
	};
	handleSubmit = async (e) => {
		const initialdata = {
			name: '',
			description: '',
			parentCategory: ''
		};
		// const { addSupplier } = this.props;
		let { addCategory } = this.props;
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors }, () => {
			// console.log(Object.keys(this.state.errors));
			if (Object.keys(this.state.errors).length === 0) {
				const hasParentCategory = this.state.parentCategory === '' ? false : true;
				this.setState({ data: initialdata });
				addCategory({ ...this.state.data, hasParentCategory });
			}
		});
	};

	validate = ({ name, description }) => {
		// const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const errors = {};
		if (name.trim().length < 6) errors.name = 'The length of name is less';
		if (description.trim().length < 6) errors.description = 'The length of description is less';

		return errors;
	};
	render() {
		const { category } = this.props;
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				{category.success ? (
					<InlineSuccess message={category.message} />
				) : (
					<InlineError message={category.message} />
				)}
				<div className="form-group">
					{/* <label>Items name</label> */}
					{/* <input
						type="select"
						className="form-control"
						placeholder="Parent Category"
						name="parentCategory"
						onChange={this.handleChange}
						value={this.state.data.parentCategory}
						required
					/> */}

					<select
						name="parentCategory"
						className="form-control"
						onChange={this.handleChange}
						value={this.state.data.parentCategory}
						required
					>
						<option value="" hidden>
							Select a parent category if any
						</option>
						{this.state.categories.map((category) => (
							<option value={category['_id']} key={category['_id']}>
								{category.name}
							</option>
						))}
					</select>
				</div>
				<div className="form-group">
					{/* <label>Category</label> */}
					{this.state.errors.name && <InlineError message={this.state.errors.name} />}
					<input
						type="text"
						className="form-control"
						placeholder="Category Name"
						name="name"
						onChange={this.handleChange}
						value={this.state.data.name}
						required
					/>
				</div>
				<div className="form-group">
					{/* <label>Supplier</label> */}
					{/* <input
						type="file"
						className="form-control"
						placeholder="Category Image"
						name="image"
						onChange={this.handleChange}
						value={this.state.data.image}
						required
					/> */}
				</div>
				<div className="form-group">
					{/* <label>Quantity</label> */}
					{this.state.errors.description && <InlineError message={this.state.errors.description} />}
					<input
						type="text"
						className="form-control"
						placeholder="Category Description"
						name="description"
						onChange={this.handleChange}
						value={this.state.data.description}
						required
					/>
				</div>
				<button className="btn btn-primary">Add Category</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	category: state.category
});
const mapActionToProps = (dispatch) => ({
	addCategory: (value) => dispatch(addCategory(value)),
	resetAddCategory: () => dispatch(resetAddCategory())
});

export default connect(mapStateToProps, mapActionToProps)(AddCategoryForm);
