import React from 'react';
import { Icon } from 'react-materialize';

const CallError = (props) => (
	<div className="center">
		<Icon className="red-text" large>error</Icon>
		<h2>There was an error</h2>
		<h3>Please try in a few minutes</h3>
		<h4 className="red-text">ERROR:</h4>
		{ props.error }
	</div>
);

export default CallError;