import React, { useState } from 'react';
import styles from './Header.module.scss';
import { Link, NavLink, Outlet, Route, Routes } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const setActive = ({ isActive }) => isActive ? (styles.link + ' ' + styles.active) : styles.link;

const Header = (props) => {
	return (
		<>
			<header className={styles.header}>
				<h2 className={styles.title}>
					<Link to='/'>
						React Routing
					</Link>
				</h2>
				<nav className={styles.nav}>
					<ul className={styles.list}>
						<li className={styles.item}>
							<NavLink to='/' className={setActive}>
								Home
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink to='/about' className={setActive}>
								About
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink to='/blog' className={setActive}>
								Blog
							</NavLink>
						</li>
						<li className={styles.item}>
							<NavLink to='/user_contacts' className={setActive}>
								Contact List
							</NavLink>
						</li>
						<li className={styles.item}>
							<CustomLink to='/nothing'>
								Кастомная ссылка
							</CustomLink>
						</li>
					</ul>
				</nav>
			</header>
		</>
	)
}

export default Header