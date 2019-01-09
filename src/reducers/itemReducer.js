import {
	ADD_ITEM_SUCCESS,
	ADD_ITEM_FAILURE,
	RESET_ADD_ITEM
} from '../constants/types';
let initialState = {};

export default function itemReducer(state = initialState, action) {
	const { message } = action.payload || '';
	switch (action.type) {
		case ADD_ITEM_SUCCESS:
			return { ...state, success: true, message };

		case ADD_ITEM_FAILURE:
			return { ...state, success: false, message };
		case RESET_ADD_ITEM:
			return initialState;

		default:
			return initialState;
	}
}
