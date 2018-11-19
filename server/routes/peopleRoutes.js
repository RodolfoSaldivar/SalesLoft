const axios = require('axios');
const circularJson = require('circular-json');
const keys = require('../config/keys');

const HEADERS = { headers: { Authorization: `Bearer ${keys.apiKey}` } }

module.exports = (app) => {

	app.get('/api/people', async (req, res) => {
		try {
			let response = await axios.get(
				'https://api.salesloft.com/v2/people.json',
				HEADERS
			);

			// Fixes 'converting circular structure to json' error
			response = circularJson.stringify(response.data.data);
			// Converting string to json
			response = JSON.parse(response);
			// Retrieve only what's neccessary
			response = response.map((person, index) => (
				{
					name: person.display_name,
					email: person.email_address,
					title: person.title
				}
			));

			res.send(response);
		}
		catch(error) {
			res.send(error.message);
		}
	});
	
};