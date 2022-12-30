import React from 'react';
import { Link, useMatch } from 'react-router-dom';
import styles from './CustomLink.module.scss';

const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch(to);
	return (
		<Link
			to={to}
			{...props}
			style={{
				color: match ? 'pink' : 'gray',
			}}
		>
			{children}
		</Link>
	)
}

export default CustomLink