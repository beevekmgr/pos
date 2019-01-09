import { call, put } from 'redux-saga/effects';
import { ADD_SUPPLIER_SUCCESS, ADD_SUPPLIER_FAILURE } from '../../constants/types';
import { SERVER } from '../../constants/';
import axios from 'axios';

export function* addSupplier(action) {
	const response = yield call(axios.post, `${SERVER}/supplier/addSupplier`, action.payload);
	if (response.data.success) {
		yield put({ type: ADD_SUPPLIER_SUCCESS, payload: response.data });
	} else {
		yield put({ type: ADD_SUPPLIER_FAILURE, payload: response.data });
	}
}
