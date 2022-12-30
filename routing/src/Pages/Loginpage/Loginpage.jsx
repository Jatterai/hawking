import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth.ts'

const Loginpage = () => {
	const { isAuth, toggleIsAuth } = useAuth();
	const navigate = useNavigate();
	const location = useLocation();

	const fromPage = location.state?.from?.pathname || '/';



	return (
		<div className='container'>
			<h2 className='title'>{isAuth ? `Разрегестрироваться?` : `Зарегестрироваться?`}</h2>
			<div className='btn-container'>
				<button className='button' onClick={toggleIsAuth}>Да!</button>
				{isAuth && <button className='button'>Bернуться обратно</button>}
			</div>

			{isAuth && navigate(fromPage, { replace: true })}
		</div>
	)
}

export default Loginpage