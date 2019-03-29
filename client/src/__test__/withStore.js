import React from 'react';
import reduxThunk from 'redux-thunk';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducers from '../reducers';

const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

export default (component) => (
	<Provider store={store}>
		{ component }
	</Provider>
);