import { useState } from 'react';
import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.scss';
import UserContacts from './components/UserContacts/UserContacts';
import Layout from './components/Layout';
import { Home, About, Blog, Post, Editpost, Createpost, Error, Loginpage } from './Pages';
import RequireAuth from './hoc/RequireAuth';
import { postsLoader } from './Pages/Blog/Blog';
import { postLoader } from './Pages/Post/Post';

const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout />}>
		<Route path='/' element={<Home />} />
		<Route path='home' element={<Navigate to='/' replace />} />
		<Route path='about' element={<About />} />
		<Route path='blog' element={<Blog />} loader={postsLoader} />
		<Route path='blog/:id' element={<Post />} loader={postLoader} />
		<Route path='blog/:id/edit' element={
			<RequireAuth>
				<Editpost />
			</RequireAuth>
		}
		/>
		<Route path='blog/new' element={
			<RequireAuth>
				<Createpost />
			</RequireAuth>
		} />
		<Route path='*' element={<Error />} />
		<Route path='login' element={<Loginpage />} />
		<Route path='user_contacts' element={<UserContacts />} />
	</Route>
))


function App() {
	return (
		<RouterProvider router={router} />
	)
}

export default App
