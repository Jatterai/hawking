import { Head } from "next/document";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function About(props) {
	const router = useRouter();
	return (
		<>

			<h1>
				About page
			</h1>
			<p>
				There's my first next app! I even made a custom 404 page!
			</p>
			<button><Link href='/thispagedoesntexist'>check it out</Link></button>
			<button onClick={() => router.push('/')}>Go back home</button>
		</>
	)
}