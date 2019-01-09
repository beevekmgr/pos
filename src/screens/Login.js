import React, { Component } from 'react';
import LoginForm from '../components/login/form';
export default class Login extends Component {
	render() {
		
		return (
			<div>
				<div className="toolbar toolbar-header">
					<div className="title">Please login to continue</div>
				</div>
				<LoginForm />
				<div className="toolbar toolbar-footer" />
			</div>
		);
	}
}
