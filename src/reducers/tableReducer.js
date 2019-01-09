import {
	TABLE_RENDER,
	
} from '../constants/types';
let initialState = [];

const tableReducer = (state = initialState, action) => {
	const  data  = action.payload;
	switch (action.type) {
		case TABLE_RENDER:
		// console.log('TO RENDER',data);
			return [...state,data]
		default:
			return state;
	}
}

export default tableReducer;
