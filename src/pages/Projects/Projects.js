import React from 'react';
import ProjectDisplay from '../../components/ProjectDisplay/ProjectDisplay';
import projects from '../../data/projects';

const Projects = () => {
	return (
		<main>
			{projects.map((project, index) => (
				<ProjectDisplay key={index} {...project} />
			))}
		</main>
	);
};

export default Projects;
