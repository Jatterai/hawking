import { Route, Navigate, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import './App.scss';
import UserContacts from './components/UserContacts/UserContacts';
import Layout from './components/Layout';
import { Home, About, Blog, Post, postLoader, postsLoader, Editpost, Createpost, Error, Loginpage } from './Pages/index';
import RequireAuth from './hoc/RequireAuth';

// import Home from './Pages/Home/Home';
// import About from './Pages/About/About';
// import { Blog, postsLoader } from './Pages/Blog/Blog';
// import { Post, postLoader } from './Pages/Post/Post';
// import Editpost from './Pages/Editpost/Editpost';
// import Createpost from './Pages/Createpost/Createpost';
// import Error from './Pages/Error/Error';
// import Loginpage from './Pages/Loginpage/Loginpage';


const router = createBrowserRouter(createRoutesFromElements(
	<Route path='/' element={<Layout />}>
		<Route path='/' element={<Home />} errorElement={<h1>help</h1>} />
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
));


function App() {
	return (
		<RouterProvider router={router} />
	)
}
export default App;
