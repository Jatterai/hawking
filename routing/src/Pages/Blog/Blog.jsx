import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Blog = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('post') || '';
	const [searchInput, setSearchInput] = useState(query);
	const [posts, setPosts] = useState([]);
	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/posts')
			.then(res => res.json())
			.then(data => setPosts(data))

	}, []);

	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchParams({ post: searchInput });
	}


	return (
		<div className="container">
			<div className="title">Our news!</div>
			<form className='form' onSubmit={handleSubmit}>
				<input
					type="search"
					name='search'
					value={searchInput}
					onChange={(e) => setSearchInput(e.target.value)}
				/>
				<button type='submit'>
					<i class="fa-solid fa-magnifying-glass"></i>
				</button>
			</form>
			<div className="posts--container">
				{
					posts
						.filter(e => e.title.toLowerCase().includes(query.toLowerCase()))
						.map(post => (
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