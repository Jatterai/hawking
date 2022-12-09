import { Html, Head, Main, NextScript } from 'next/document'
import Header from '../components/Header/Header'

export default function Document() {
	return (
		<Html>
			<Head>
				<title>My awesome page</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	)
}