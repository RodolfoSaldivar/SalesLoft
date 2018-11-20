import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import Header from './Header';
import People from './People';
import Frequency from './People/Frequency';

const App = (props) => (
	<BrowserRouter>
		<div>
			<Header />
			<br />
			<div className="container">
				<Route exact path='/' component={ People } />
				<Route exact path='/frequency' component={ Frequency } />
			</div>
		</div>
	</BrowserRouter>
);

export default App;