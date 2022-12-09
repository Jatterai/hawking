
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import s from './post.module.scss'

export default function Post({ post }) {
	const router = useRouter();
	return (

		<>
			<div className={s.post}>
				<h1 className={s.title}>{post.title}</h1>
				<p className={s.txt}>{post.body}</p>
			</div>
			<button onClick={() => router.push('/posts')}>To posts</button>
		</>
	)
}

Post.getInitialProps = async ({ query }) => {
	const url = 'http://localhost:4200/posts/' + query.postid;
	const res = await fetch(url);
	const post = await res.json();

	return {
		post
	}
}



