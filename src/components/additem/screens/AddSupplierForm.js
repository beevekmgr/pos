import React, { Component } from 'react';
import { connect } from 'react-redux';
import InlineError, { InlineSuccess } from '../../inlineMessage';
import { addSupplier, resetAddSupplier } from '../../../actions';

class AddSupplierForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				name: '',
				description: '',
				contact: '',
				email: ''
			},
			errors: {
				name: '',
				description: '',
				phone: '',
				email: ''
			}
		};
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
			description: '',
			contact: '',
			email: ''
		};
		const { addSupplier } = this.props;
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors }, () => {
			// console.log(Object.keys(this.state.errors));
			if (Object.keys(this.state.errors).length === 0) {
				this.setState({ data: initialdata });
				addSupplier(this.state.data);
			}
		});
	};

	validate = ({ name, description, contact, email }) => {
		const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const errors = {};
		if (name.trim().length < 6) errors.name = 'The length of name is less';
		if (description.trim().length < 6) errors.description = 'The length of description is less';
		if (contact.trim().length < 6 || !/^\d+$/.test(contact))
			errors.contact = 'The contact number should be number only and length should me more than 6';
		if (!regex.test(email)) errors.email = 'Please input a valid email';

		return errors;
	};

	componentWillMount() {
		this.props.resetAddSupplier();
	}
	render() {
		const { supplier } = this.props;
		return (
			<form className="form" onSubmit={this.handleSubmit}>
				<div className="heading">Please fill up the form to add a category</div>
				{supplier.success ? (
					<InlineSuccess message={supplier.message} />
				) : (
					<InlineError message={supplier.message} />
				)}
				<div className="form-group">
					{this.state.errors.name && <InlineError message={this.state.errors.name} />}
					{/* <label>Items name</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Supplier Name"
						name="name"
						value={this.state.data.name}
						onChange={this.handleChange}
					/>
				</div>
				<div className="form-group">
					{this.state.errors.description && <InlineError message={this.state.errors.description} />}
					{/* <label>Category</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Supplier Description"
						name="description"
						onChange={this.handleChange}
						value={this.state.data.description}
					/>
				</div>
				<div className="form-group">
					{this.state.errors.contact && <InlineError message={this.state.errors.contact} />}
					{/* <label>Quantity</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Supplier Contact"
						name="contact"
						onChange={this.handleChange}
						value={this.state.data.contact}
					/>
				</div>
				<div className="form-group">
					{this.state.errors.email && <InlineError message={this.state.errors.email} />}
					{/* <label>Quantity</label> */}
					<input
						type="text"
						className="form-control"
						placeholder="Supplier Email"
						name="email"
						onChange={this.handleChange}
						value={this.state.data.email}
					/>
				</div>
				<button className="btn btn-primary">Add Supplier</button>
			</form>
		);
	}
}

const mapStateToProps = (state) => ({
	supplier: state.supplier
});
const mapActionToProps = (dispatch) => ({
	addSupplier: (value) => dispatch(addSupplier(value)),
	resetAddSupplier: () => dispatch(resetAddSupplier())
});

export default connect(mapStateToProps, mapActionToProps)(AddSupplierForm);
