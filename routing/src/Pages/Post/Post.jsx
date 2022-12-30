import React, { Suspense } from 'react';
import { useNavigate, useLoaderData, Await, defer, useAsyncValue } from 'react-router-dom';
import styles from './Post.module.scss';
import { Link } from 'react-router-dom';

const PostBody = () => {
	const post = useAsyncValue();
	return (
		<div className={styles.body}>
			<h2 className="title">{post.title}</h2>
			<p className="p">{post.body}</p>
		</div>
	)
}


const Post = () => {
	const navigate = useNavigate();
	const goBack = () => navigate(-1);
	const { post, id } = useLoaderData();

	return (
		<div className={`container ${styles.container}`}>
			<Suspense fallback={<h2>Post is loading</h2>}>
				<Await resolve={post}>
					<PostBody />
				</Await>
			</Suspense>
			<div className={styles.btns_container}>
				<button className={styles.button} onClick={goBack}>Go back</button>
				<Link className={styles.button} to={`/blog/${id}/edit`}>Edit post</Link>
			</div>
		</div>
	)
}

const getPostById = async (id) => {
	const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
	return res.json();
}

export const postLoader = async ({ req, params }) => {
	const id = params.id;
	return defer({ post: getPostById(id), id })
}

export default Post