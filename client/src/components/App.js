import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import People from './People';
import Typos from './People/Typos';
import Frequency from './People/Frequency';
import TyposInput from './People/TyposInput';

const App = (props) => (
	<BrowserRouter>
		<div>
			<Header />
			<br />
			<div className="container">
				<Route exact path='/' component={ People } />
				<Route exact path='/typos' component={ Typos } />
				<Route exact path='/frequency' component={ Frequency } />
				<Route exact path='/typos_input' component={ TyposInput } />
			</div>
		</div>
	</BrowserRouter>
);

export default App;