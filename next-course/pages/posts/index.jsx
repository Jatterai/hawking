import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react"

export default function Posts({ data, andThis }) {

	const router = useRouter();
	// const [posts, setPosts] = useState([]);
	// useEffect(() => {
	// 	async function load() {
	// 		const res = await fetch('http://localhost:4200/posts');
	// 		const data = await res.json()
	// 		setPosts(data);
	// 	}
	// 	load()
	// }, [])

	return (
		<>
			<h1 className="title">Posts page</h1>
			<div className="posts-container">
				{data.map(post => (
					<Link href={`${router.route}/${post.id}`} className="post" key={post.id}>
						<h5 className="post__title">{post.title}</h5>
						<p className="post__body">{post.body}</p>
					</Link>
				))}
			</div>
		</>
	)
}

Posts.getInitialProps = async () => {
	const res = await fetch('http://localhost:4200/posts');
	const data = await res.json()

	return {
		data,
		andThis: 'huh'
	}
}