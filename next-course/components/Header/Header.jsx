import Link from "next/link";
import styles from './Header.module.scss';

export default function Header() {
	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<ul className={styles.list}>
					<Link href={'/'} className={styles.link}>Home</Link>
					<Link href={'/about'} className={styles.link}>About</Link>
					<Link href='/posts' className={styles.link}>Posts</Link>
				</ul>
			</nav>
		</header>
	)
}