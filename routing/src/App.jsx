import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.scss';
import Header from './components/Header/Header.jsx';
import UserContacts from './components/UserContacts/UserContacts';

import { Home, About, Blog, Post, Editpost, Createpost, Error, Loginpage } from './Pages';
import RequireAuth from './hoc/RequireAuth';

function App() {
	const [active, setActive] = useState(0)

	return (
		<>
			<Header />
			<main className='main'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='/home' element={<Navigate to='/' replace />} />
					<Route path='/about' element={<About />} />
					<Route path='/blog' element={<Blog />}></Route>
					<Route path='/blog/:id' element={<Post />} />
					<Route path='/blog/:id/edit' element={
						<RequireAuth>
							<Editpost />
						</RequireAuth>
					}
					/>
					<Route path='/blog/new' element={
						<RequireAuth>
							<Createpost />
						</RequireAuth>
					} />
					<Route path='*' element={<Error />}></Route>
					<Route path='/login' element={<Loginpage />} />
					<Route path='/user_contacts' element={<UserContacts />}></Route>
				</Routes>
			</main>
			<footer className='footer'>2022</footer>
		</>
	)
}

export default App
