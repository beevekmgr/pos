import { takeEvery } from 'redux-saga/effects';
import { USER_LOGIN, ADD_CATEGORY, ADD_SUPPLIER ,ADD_ITEM, GET_ITEM} from '../constants/types';
import { userLogin } from './auth/index';
import { addCategory } from './categories/index';
import { addSupplier} from './suppliers/index';
import { addItem} from './items/index';
import {getItem} from './sales/index';

export default function* rootsaga() {
	yield takeEvery(USER_LOGIN, userLogin);
	yield takeEvery(ADD_CATEGORY, addCategory);
	yield takeEvery(ADD_SUPPLIER, addSupplier);
	yield takeEvery(ADD_ITEM,addItem);
	yield takeEvery(GET_ITEM, getItem);
}
