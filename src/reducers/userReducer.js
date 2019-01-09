import { USER_LOGIN_SUCCESS, USER_LOGIN_FAILURE } from '../constants/types';
let initialState = { user: {}, errors: { mainError: '' } };

export default function userReducer(state = initialState, action) {
	switch (action.type) {
		case USER_LOGIN_SUCCESS:
			return { user: action.payload, ...state };

		case USER_LOGIN_FAILURE:
			const { errors } = action;
			return { ...state, errors };

		default:
			return initialState;
	}
}
