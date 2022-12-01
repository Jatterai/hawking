import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Loginpage = () => {
	const navigate = useNavigate();
	const location = useLocation();


	const fromPage = location.state?.from?.pathname || '/';
	return (
		<div>
			<h2>Login page</h2>
			<div>
				<h3>RequareAuth location object:</h3>
				<p>{JSON.stringify(location.state.from)}</p>
			</div>
			<div>
				<h3>Loginpage location object:</h3>
				<p>{JSON.stringify(location)}</p>
			</div>

			<div>
				<h3>From Page</h3>
				<p>{fromPage}</p>
			</div>
		</div>
	)
}

export default Loginpage