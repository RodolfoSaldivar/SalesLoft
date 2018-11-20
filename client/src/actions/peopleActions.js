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

export const setFrecuencies = (people) => (dispatch) => {
	let frequencies = {};

	people.map(({email}) => {
		let dictionary = {};
		for (const letter of email) {
			// If the letter has already been count
			if (dictionary[letter]) continue;

			// Method made in the 'functions' file
			const count = email.count(letter);

			dictionary[letter] = true;

			if (frequencies[letter]) {
				frequencies[letter] += count;
			}
			else {
				frequencies[letter] = count;
			}
		}
	});

	dispatch({ type: 'people_frequencies', payload: frequencies });
};

	