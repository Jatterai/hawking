import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Errorpage = () => {
	const error = useRouteError();
	console.log(error);
	return (
		<section>
			<div className="container">
				<h2 className="title">{error.statusText || 'Sorry, something goes wrong...'}</h2>
				<p className="p">error status: {error.status || 'unknown'}</p>
			</div>
		</section>
	)
}
