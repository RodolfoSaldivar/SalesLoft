import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar } from 'react-materialize';

const Header = (props) =>
(
	<div>
		<Navbar>
			<li>
				<Link to="/">
					<div>
						Level 1
					</div>
				</Link>
			</li>
			<li>
				<Link to="/level2">
					Level 2
				</Link>
			</li>
		</Navbar>
	</div>
);

export default Header;