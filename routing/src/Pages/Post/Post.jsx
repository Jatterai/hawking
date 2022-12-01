import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Post.module.scss';


export const Post = () => {
	const [post, setPost] = useState();
	const { id } = useParams();
	const navigate = useNavigate();

	const goBack = () => navigate(-1);
	useEffect(() => {
		fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
			.then(r => r.json())
			.then(post => setPost(post))
	}, [id])

	return (
		<div className={`container ${styles.container}`}>
			{post && (
				<div className={styles.body}>
					<h2 className="title">{post.title}</h2>
					<p className="p">{post.body}</p>
				</div>
			)}
			<button className={styles.button} onClick={goBack}>Go Back</button>
		</div>
	)
}
