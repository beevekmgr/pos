import { call, put } from 'redux-saga/effects';
import { ADD_ITEM_SUCCESS, ADD_ITEM_FAILURE } from '../../constants/types';
import { SERVER } from '../../constants/';
import axios from 'axios';

export function* addItem(action) {
	const response = yield call(axios.post, `${SERVER}/product/addProduct`, action.payload);
	if (response.data.success) {
		yield put({ type: ADD_ITEM_SUCCESS, payload: response.data });
	} else {
		yield put({ type: ADD_ITEM_FAILURE, payload: response.data });
	}
}
