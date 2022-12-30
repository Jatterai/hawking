import React from 'react';
import styles from './Error.module.scss'

const Error = () => {
	return (
		<div className="container">
			<div className={'title ' + styles.error}>404 ERROR</div>
		</div>
	)
}

export default Error