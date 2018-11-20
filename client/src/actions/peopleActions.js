import axios from 'axios';
import bktree from'bktree';
import { START, SUCCESS, FAILED, FREQUENCY, TYPOS, TREE, INPUT_TYPOS, INPUT } from '../types/peopleTypes';

// Connects to the server
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


// Set the frequencies of the letters
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


// Creates an array with all the mails
export const createTree = (people) => (dispatch) => {
	dispatch({ type: START });

	const all_mails = people.map(({email}) => email);
	var tree = new bktree(all_mails);

	dispatch({ type: TREE, payload: tree });
};


// Creates an array of possible typos
export const viewTypos = (tree, people) => (dispatch) => {
	dispatch({ type: START });

	let typos = [];
	people.map(({email}) => {
		// Get correctly spelled words at distance <= 3
		const similars = tree.query(email, 3);
		// Always 1, the email itself
		if (similars.length > 1) typos.push(similars);
	});

	dispatch({ type: TYPOS, payload: typos });
};


// Creates an array of possible typos from one string
export const validateTypos = (input, tree) => (dispatch) => {
	dispatch({ type: START });

	// Get correctly spelled words at distance <= 3
	const similars = tree.query(input, 3);

	dispatch({ type: INPUT, payload: input });
	dispatch({ type: INPUT_TYPOS, payload: similars });
};
