import axios from 'axios';
import { START, SUCCESS, FAILED } from '../types/peopleTypes';

export const getPeople = () => async (dispatch) => {
	dispatch({ type: START });

	try {
		const response = await axios.get('/api/people');
		dispatch({ type: SUCCESS, payload: response.data });
	}
	catch(error) {
		dispatch({ type: FAILED, payload: error.message });
	}
};