import axios from 'axios';
import { START, SUCCESS, FAILED, FREQUENCY } from '../types/peopleTypes';

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
	dispatch({ type: START });

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

	// Get array sorted by the letters with more counts
	const keysSorted = Object.keys(frequencies).sort(
		(a, b) => ( frequencies[b] - frequencies[a] )
	);

	let arrayFreq = [];
	keysSorted.map((letter) => {
		let obj = { letter, count: frequencies[letter] };
		arrayFreq.push(obj);
	});

	dispatch({ type: FREQUENCY, payload: arrayFreq });
};

	