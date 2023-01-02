import { Route, Navigate, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import UserContacts from './components/UserContacts/UserContacts';
import Layout from './components/Layout';
import { Home, About, Blog, Post, postLoader, postsLoader, Editpost, Createpost, Error, Loginpage, Errorpage } from './Pages/index';
import RequireAuth from './hoc/RequireAuth';



export const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout />}>
		<Route path='/' element={<Home />} errorElement={<h1>help</h1>} />
		<Route path='home' element={<Navigate to='/' replace />} />
		<Route path='about' element={<About />} />
		<Route path='blog' element={<Blog />} loader={postsLoader} errorElement={<Errorpage />} />
		<Route path='blog/:id' element={<Post />} loader={postLoader} errorElement={<h1>love</h1>} />
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
));
