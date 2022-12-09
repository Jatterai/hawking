import Head from 'next/head';
import Link from 'next/link';
import styles from '../styles/Home.module.scss';

export default function Home() {
	return (
		<>
			<h1 className={styles.title}>Hello, my name is Yuna!</h1>
			<p>This is the home page!</p>
		</>
	)
}