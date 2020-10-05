import 'styles/global.sass'
import Head from 'next/head'
import Header from 'components/header'
import { contextual, useDescription, useMeta, useTitle } from 'hooks/context'

function Layout({ Component, pageProps }) {
	const { title, ...meta } = useMeta()

	return (
		<>
			<Head>
				<title>{title ?? pageProps.title ?? 'Listen'}</title>
				{Object.keys(meta).map(name => (
					<meta key={name} name={name} value={meta[name]} />
				))}
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	)
}

export default contextual(Layout)
