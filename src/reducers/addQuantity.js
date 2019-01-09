import {
	ADD_QUANTITY,
	
} from '../constants/types';
let initialState = {};

const addQuantity = (state = initialState, action) => {
	const  quantity  = action.payload;
	switch (action.type) {
		case ADD_QUANTITY:
		// console.log('quantity',quantity);
			return {...state,quantity}
		default:
			return state;
	}
}

export default addQuantity;