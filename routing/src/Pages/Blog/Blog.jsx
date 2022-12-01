import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))

	}, [])
	return (
		<div className="container">
			<div className="title">Our news!</div>
			<div className="posts--container">
				{
					posts.map(post => (
						<div className='post' key={post.id}>
							<h5>{post.title}</h5>
							<Link to={`/blog/${post.id}`}>learn more</Link>
						</div>
					))
				}
			</div>
		</div>
	)
}

export default Blog