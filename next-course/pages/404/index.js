import Link from "next/link";
import styles from './404.module.scss';

export default function Error() {
	return (
		<>
			<h1 className={styles.title}>404. Theres no such page</h1>
			<button className={styles.error_link}><Link href='/' >Go home:)</Link></button>
		</>
	)
}