import React from 'react';
import { SocialIcon } from 'react-social-icons';

import './Footer.css';

const Footer = () => {
	return (
		<footer>
			<h2>Connect Me On Social Media!</h2>
			<div>
				<SocialIcon url='https://www.linkedin.com/in/ritik-patel-5a61211a4/' />
				<SocialIcon url='https://github.com/ritik-patel05' />
				<SocialIcon url='https://www.instagram.com/ritik_patel05/' />
			</div>
		</footer>
	);
};

export default Footer;
