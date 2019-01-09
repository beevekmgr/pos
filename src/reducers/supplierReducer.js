import { ADD_SUPPLIER_SUCCESS, ADD_SUPPLIER_FAILURE, RESET_ADD_SUPPLIER } from '../constants/types';
let initialState = {};

export default function categoryReducer(state = initialState, action) {
	const { message } = action.payload || '';
	switch (action.type) {
		case ADD_SUPPLIER_SUCCESS:
			return { ...state, success: true, message };

		case ADD_SUPPLIER_FAILURE:
			return { ...state, success: false, message };
		case RESET_ADD_SUPPLIER:
			return initialState;

		default:
			return initialState;
	}
}
