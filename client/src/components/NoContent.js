import React from 'react';
import { Icon } from 'react-materialize';

const NoContent = (props) => (
	<div className="center">
		<br />
		<Icon large>desktop_access_disabled</Icon>
		<h4>There's no content to show.</h4>
	</div>
);

export default NoContent;