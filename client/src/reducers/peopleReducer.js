import { START, SUCCESS, FAILED } from '../types/peopleTypes';

const INITIAL_STATE = {
	people: [],
	loading: false,
	loaded: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case START: return {
			...state,
			error: '',
			loading: true,
			laoded: false
		};

		case SUCCESS: return {
			...state,
			error: '',
			loading: false,
			loaded: true,
			people: action.payload
		};

		case FAILED: return {
			...state,
			loading: false,
			loaded: false,
			error: action.payload
		};

		default: return state;
	}
}