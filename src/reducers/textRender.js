import {
	TEXT_RENDER,
	TEXT_CLEAR,
	
} from '../constants/types';
let initialState = [];

const textRender = (state = initialState, action) => {
	const  data  = action.payload;
	switch (action.type) {
		case TEXT_RENDER:
		console.log('TO RENDER',data);
		// console.log({state,data})
		if(!state.length)
			return [...state,data]
		else
			return[data] 

		case TEXT_CLEAR : 
			console.log('text clear');
			return []
		default:
			return state;
	}
}

export default textRender;
