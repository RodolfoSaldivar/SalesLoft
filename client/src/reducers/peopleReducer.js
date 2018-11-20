import { START, SUCCESS, FAILED, FREQUENCY } from '../types/peopleTypes';

const INITIAL_STATE = {
	people: [],
	frequencies: [],
	loading: false,
	error: ''
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case START: return {
			...state,
			error: '',
			loading: true
		};

		case FAILED: return {
			...state,
			loading: false,
			error: action.payload
		};

		case SUCCESS: return {
			...state,
			error: '',
			loading: false,
			people: action.payload
		};

		case FREQUENCY: return {
			...state,
			loading: false,
			frequencies: action.payload
		};

		default: return state;
	}
}