import {
	ADD_CATEGORY_SUCCESS,
	ADD_CATEGORY_FAILURE,
	RESET_ADD_CATEGORY
} from '../constants/types';
let initialState = {};

export default function categoryReducer(state = initialState, action) {
	const { message } = action.payload || '';
	switch (action.type) {
		case ADD_CATEGORY_SUCCESS:
			return { ...state, success: true, message };

		case ADD_CATEGORY_FAILURE:
			return { ...state, success: false, message };
		case RESET_ADD_CATEGORY:
			return initialState;

		default:
			return initialState;
	}
}
