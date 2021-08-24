import React from 'react';
import { Link } from 'react-router-dom';

import './Home.css';

const Home = () => {
	return (
		<main>
			<div className='intro'>
				<div className='intro-title'>
					<h1>
						Hi, I am <span>Ritik Patel</span>
					</h1>
				</div>
				<p className='intro-descritption'>
					A passionate and curious web developer
				</p>
			</div>
			<div className='showcase'>
				<div className='projects showcase-item'>
					<h2>Projects</h2>
					Here are my projects that I have completed, you can watch
					them live as they are hosted and the code on github.
					<Link to='/projects'>See Projects</Link>
				</div>
				<div className='blogs showcase-item'>
					<h2>Blogs</h2>I also write technical and non technical blogs
					related to my journey and learnings as a developer.
					<Link to='/blogs'>See Blogs</Link>
				</div>
				<div className='tech-stack showcase-item'>
					<h2>Tech Stack</h2>
					<ul>
						<li>
							<h3>Languages</h3>
							<span>C++, Javascript, Python</span>
						</li>
						<li>
							<h3>Frontend</h3> <span>HTML, CSS, React</span>
						</li>
						<li>
							<h3>Backend</h3>
							<span>
								DynamoDB, MongoDB, SQL, Node, Express, PHP
							</span>
						</li>
						<li>
							<h3>State Management</h3>{' '}
							<span>Redux, Redux Toolkit</span>
						</li>
						<li>
							<h3>Version Control</h3>{' '}
							<span>Git, Jira, Github, Bitbucket</span>
						</li>
					</ul>
				</div>
			</div>
		</main>
	);
};

export default Home;
