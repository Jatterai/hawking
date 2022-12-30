import React from 'react';
import { useParams } from 'react-router-dom';

const Editpost = () => {
	const { id } = useParams();
	return (
		<div className='container'>
			<h1 className='title'>Edit {id} post</h1>
		</div>
	)
}

export default Editpost