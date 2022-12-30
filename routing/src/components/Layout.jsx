import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header/Header';

const Layout = () => {
	return (
		<>
			<Header />
			<main className='main'>
				<Outlet />
			</main>
			<footer className='footer'>2022</footer>
		</>
	)
}

export default Layout