import {  SERVER } from '../../constants/';
import axios from 'axios';
import { call, put } from 'redux-saga/effects';
import { GET_ITEM_SUCCESS} from '../../constants/types';


export function* getItem() {
    const response = yield call(axios.post, `${SERVER}/product/getProducts`);
    // console.log('getItem',response.data.product);
	if (response.data.product) {
		yield put({ type: GET_ITEM_SUCCESS, payload: response.data.product });
	} 
}