import {
	USER_LOGIN,
	USER_LOGOUT,
	ADD_CATEGORY,
	ADD_SUPPLIER,
	ADD_ITEM,
	RESET_ADD_CATEGORY,
	RESET_ADD_SUPPLIER,
	RESET_ADD_ITEM,
	GET_ITEM,
	SELECT_ITEM,
	ADD_QUANTITY,
	TABLE_RENDER,
	TEXT_RENDER,
	TEXT_CLEAR,
} from '../constants/types';

export const userLogin = (data) => {
	console.log({ data });
	return {
		type: USER_LOGIN,
		payload: data
	};
};

export const userLogout = (data) => ({
	type: USER_LOGOUT,
	payload: data
});

//SUPPLIERS
export const addSupplier = (data) => {
	return {
		type: ADD_SUPPLIER,
		payload: data
	};
};
export const resetAddSupplier = () => {
	return {
		type: RESET_ADD_SUPPLIER
	};
};

//CATEGORIES
export const addCategory = (data) => {
	return {
		type: ADD_CATEGORY,
		payload: data
	};
};

export const resetAddCategory = () => {
	return {
		type: RESET_ADD_CATEGORY
	};
};

//products

export const addItem = (data) => {
	return {
		type: ADD_ITEM,
		payload: data
	};
};

export const resetAddItem = (data) => {
	return {
		type: RESET_ADD_ITEM,
		payload: data
	};
};

export const getItem = () => {
	return {
		type : GET_ITEM,
		
	}
}

export const selectItem = (data) => {
	return {
		type : SELECT_ITEM,
		payload : data,
	}
}

export const addQuantity = (data) => {
	return {
		type : ADD_QUANTITY,
		payload : data,
	}
}

export const tableRender = (data) => {
	return {
		type : 	TABLE_RENDER,
		payload : data,
	}
}

export const textRender = (data) => {
	return {
		type : TEXT_RENDER,
		payload : data,
	}
}

export const textClear = () => {
	return {
		type : TEXT_CLEAR,
	
	}
}