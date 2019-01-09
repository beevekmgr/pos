import {
	SELECT_ITEM,
	
} from '../constants/types';
let initialState = {};

const selectReducer = (state = initialState, action) => {
	const  data  = action.payload;
	switch (action.type) {
		case SELECT_ITEM:
		// console.log('selced tiem',data);
			return {...state,data}
		default:
			return state;
	}
}

export default selectReducer;

