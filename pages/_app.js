import 'styles/global.sass'
import Head from 'next/head'
import Header from 'components/header'
import { contextual, useMeta } from 'hooks/context'

function Layout({ Component, pageProps }) {
	const { title, ...meta } = useMeta()

	return (
		<>
			<Head>
				<title>{title ?? pageProps.title ?? 'Listen'}</title>
				{Object.keys(meta).map(name => (
					<meta key={name} name={name} value={meta[name]} />
				))}

				<link rel='manifest' href='/manifest.json' />
				<link
					href='/vinyl.png'
					rel='icon'
					type='image/png'
				/>
				<meta
					name='viewport'
					content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no'
				/>
			</Head>
			<Header />
			<Component {...pageProps} />
		</>
	)
}

export default contextual(Layout)
