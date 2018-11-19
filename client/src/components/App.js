import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';
import Header from './Header';
import People from './People';

const App = (props) => (
	<BrowserRouter>
		<div>
			<Header />
			<br />
			<div className="container">
				<Route exact path='/' component={ People } />
			</div>
		</div>
	</BrowserRouter>
);

export default App;