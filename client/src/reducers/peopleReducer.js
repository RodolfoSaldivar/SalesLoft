import { START, SUCCESS, FAILED, FREQUENCY, TYPOS, TREE, INPUT_TYPOS, INPUT } from '../types/peopleTypes';

const INITIAL_STATE = {
	input: '',
	error: '',
	typos: [],
	tree: null,
	people: [],
	loading: false,
	frequencies: [],
	input_typos: [],
};

export default (state = INITIAL_STATE, action) => {
	switch (action.type) {

		case START: return {
			...state,
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

		case TYPOS: return {
			...state,
			loading: false,
			typos: action.payload
		};

		case TREE: return {
			...state,
			loading: false,
			tree: action.payload
		};

		case INPUT: return {
			...state,
			input: action.payload
		};

		case INPUT_TYPOS: return {
			...state,
			loading: false,
			input_typos: action.payload
		};

		default: return state;
	}
}