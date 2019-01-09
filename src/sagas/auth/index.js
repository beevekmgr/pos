import { call, put } from 'redux-saga/effects';
import { SERVER } from '../../constants/';
import axios from 'axios';
import { USER_LOGIN_FAILURE, USER_LOGIN_SUCCESS } from '../../constants/types';
const electron = window.require('electron');
const { ipcRenderer } = electron;

export function* userLogin(action) {
	const response = yield call(axios.post, `${SERVER}/user/login`, action.payload);

	if (response.data.success) {
		let { token } = response.data;
		yield localStorage.setItem('token', token);
		yield put({ type: USER_LOGIN_SUCCESS, payload: response.data.user });
		ipcRenderer.send('open:dashboard');
	} else {
		yield put({
			type: USER_LOGIN_FAILURE,
			errors: response.data.errors
		});
	}
}

export function* userLogout() {
	yield;
}
