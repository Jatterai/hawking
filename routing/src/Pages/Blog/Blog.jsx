import React, { useState, Suspense } from 'react';
import { Link, useLoaderData, useSearchParams, defer, Await } from 'react-router-dom';

export const Blog = () => {
	const [searchParams, setSearchParams] = useSearchParams();
	const query = searchParams.get('post') || '';
	const [searchInput, setSearchInput] = useState(query);
	const { posts } = useLoaderData();
	const handleSubmit = (e) => {
		e.preventDefault();
		setSearchParams({ post: searchInput });
	}

	console.log(posts)

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
			<Suspense fallback={<h2>loading...</h2>}>
				<Await resolve={posts}>
					{
						(posts) => (
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
						)
					}
				</Await>
			</Suspense>

		</div>
	)
}

const getPosts = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/posts');
	return res.json()
}

export const postsLoader = async () => {
	return defer({ posts: getPosts() })
}
