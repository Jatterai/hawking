import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styles from './Post.module.scss';
import { Link } from 'react-router-dom';


const Post = () => {
	const [post, setPost] = useState(null);
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
			<div className={styles.btns_container}>
				<button className={styles.button} onClick={goBack}>Go back</button>
				<Link className={styles.button} to={`/blog/${id}/edit`}>Edit post</Link>
			</div>
		</div>
	)
}

export default Post