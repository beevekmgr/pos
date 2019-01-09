import { call, put } from 'redux-saga/effects';
import { ADD_CATEGORY_SUCCESS, ADD_CATEGORY_FAILURE } from '../../constants/types';
import { SERVER } from '../../constants/';
import axios from 'axios';

export function* addCategory(action) {
	const response = yield call(axios.post, `${SERVER}/category/addCategory`, action.payload);
	if (response.data.success) {
		yield put({ type: ADD_CATEGORY_SUCCESS, payload: response.data });
	} else {
		yield put({ type: ADD_CATEGORY_FAILURE, payload: response.data });
	}
}
