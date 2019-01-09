import {
	GET_ITEM_SUCCESS,
	
} from '../constants/types';
let initialState = {message:[]};

export default function salesReducer(state = initialState, action) {
	const  message  = action.payload || [];
	switch (action.type) {
		case GET_ITEM_SUCCESS:
			return { ...state, message };
		default:
			return state;
	}
}

