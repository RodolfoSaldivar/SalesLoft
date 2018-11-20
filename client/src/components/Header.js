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
						People
					</div>
				</Link>
			</li>
			<li>
				<Link to="/frequency">
					Frequency
				</Link>
			</li>
			<li>
				<Link to="/typos">
					Typos
				</Link>
			</li>
			<li>
				<Link to="/typos_input">
					From Input
				</Link>
			</li>
		</Navbar>
	</div>
);

export default Header;