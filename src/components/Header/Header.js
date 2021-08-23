import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css';

const Header = () => {
	return (
		<header>
			<h1>
				<Link to='/'>Home</Link>
			</h1>
			<ul>
				<li>
					<Link to='/projects'>Projects</Link>
				</li>
				<li>
					<Link to='/blogs'>Blogs</Link>
				</li>
			</ul>
		</header>
	);
};

export default Header;
