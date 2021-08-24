import React from 'react';

import './Blog.css';

const Blog = () => {
	return (
		<main>
			<div className='blogs-container'>
				<div className='blogs-items'>
					<h2>Most used git commands</h2>
					<p>
						Here are the most used git commands, that everyone
						should know. It includes all the commands that I used
						during my 6 months intern as a software engineer at
						GeeksforGeeks.
					</p>
					<a
						href='https://dev.to/ritik_patel05/most-used-git-commands-9bp'
						target='_blank'
						rel='noreferrer'>
						Read article
					</a>
				</div>
				<div className='blogs-items'>
					<h2>
						6 months intern as a Software Engineer, GeeksforGeeks
					</h2>
					<p>
						Here is my blog related to how I got opportunity to
						intern at GeeksforGeeks during my 3rd year, and all the
						learnings that happened during this time.
					</p>
					<a
						href='https://dev.to/ritik_patel05/6-months-intern-as-a-software-engineer-geeksforgeeks-2l3k'
						target='_blank'
						rel='noreferrer'>
						Read article
					</a>
				</div>
			</div>
		</main>
	);
};

export default Blog;
