import 'styles/global.sass'
import Header from 'components/header'

export default function Layout({ Component, pageProps }) {
	return (
		<>
			<Header />
			<Component {...pageProps} />
		</>
	)
}
