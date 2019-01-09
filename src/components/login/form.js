import React, { Component } from 'react';
import InlineError from '../inlineMessage/index';
import { connect } from 'react-redux';
import { userLogin } from '../../actions/index';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: {
				username: '',
				password: ''
			},
			errors: {
				username: '',
				password: ''
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
		const { userLogin } = this.props;
		e.preventDefault();
		const errors = this.validate(this.state.data);
		this.setState({ errors }, () => {
			// console.log(Object.keys(this.state.errors));
			if (Object.keys(this.state.errors).length === 0) {
				userLogin(this.state.data);
			}
		});
	};

	validate = ({ username, password }) => {
		const errors = {};
		if (username.length < 6) errors.username = 'The length of username is less';
		if (password.length < 6) errors.password = 'The length of password is less';
		return errors;
	};

	render() {
		const { user } = this.props;
		let mainError;
		if (user.errors.mainError === 'undefined') {
			mainError = null;
		} else {
			mainError = user.errors.mainError;
		}
		console.info('mainerror', mainError);
		return (
			<div
				className="window-content"
				style={{ backgroundColor: '#eee', height: '100vh', alignItems: 'center', justifyContent: 'center' }}
			>
				<form onSubmit={this.handleSubmit}>
					<div>{mainError && <InlineError message={mainError} />}</div>
					<div class="form-group">
						<input
							type="text"
							class="form-control"
							placeholder="username"
							onChange={this.handleChange}
							value={this.state.data.username}
							name="username"
						/>
						{this.state.errors.username && <InlineError message={this.state.errors.username} />}
					</div>
					<div class="form-group">
						<input
							type="password"
							class="form-control"
							placeholder="Password"
							onChange={this.handleChange}
							value={this.state.data.password}
							name="password"
						/>
						{this.state.errors.username && <InlineError message={this.state.errors.password} />}
					</div>
					<div className="form-actions">
						<button type="submit" class="btn btn-form btn-primary" style={{ width: '200px' }}>
							Login
						</button>
					</div>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({ user: state.user });

const mapActionToProps = (dispatch) => ({
	userLogin: (values) => dispatch(userLogin(values))
});

export default connect(mapStateToProps, mapActionToProps)(LoginForm);
