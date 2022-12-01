import { useState } from 'react';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import './App.scss';
import Header from './components/Header/Header.jsx';
import About from './Pages/About/About.jsx';
import Blog from './Pages/Blog/Blog';
import Error from './Pages/Error/Error';
import Home from './Pages/Home/Home.jsx';
import { Post } from './Pages/Post/Post.jsx';
import Loginpage from './Pages/Loiginpage/Loginpage';
import RequareAuth from './components/hoc/RequareAuth';
import UserContacts from './components/UserContacts/UserContacts';

function App() {
	const [active, setActive] = useState(0)

	return (
		<>
			<Header />
			<main className='main'>
				<Routes>
					<Route path='/' element={<Home />}></Route>
					<Route path='home' element={<Navigate to='/' replace />} />
					<Route path='/about' element={
						<RequareAuth>
							<About />
						</RequareAuth>
					}></Route>
					<Route path='/blog' element={<Blog />}></Route>
					<Route path='/blog/:id' element={<Post />}></Route>
					<Route path='*' element={<Error />}></Route>
					<Route path='/login' element={<Loginpage />}></Route>
					<Route path='/user_contacts' element={<UserContacts />}></Route>
				</Routes>
			</main>
			<footer className='footer'>2021</footer>
		</>
	)
}

export default App
