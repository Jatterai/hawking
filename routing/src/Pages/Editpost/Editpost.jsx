import React from 'react';
import { useParams } from 'react-router-dom';

export const Editpost = () => {
	const { id } = useParams();
	return (
		<div className='container'>
			<h1 className='title'>Edit {id} post</h1>
		</div>
	)
}
