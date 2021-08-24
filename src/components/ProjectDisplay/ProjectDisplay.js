import React from 'react';
import './ProjectDisplay.css';

const ProjectDisplay = ({ title, description, live, github }) => {
	return (
		<div className='project-container'>
			<h2>{title}</h2>
			<p>{description}</p>
			<div className='links'>
				<a href={live}>Live</a>
				<a className='github' href={github} target='_blank' rel='noreferrer'>
					Github
				</a>
			</div>
		</div>
	);
};

export default ProjectDisplay;
