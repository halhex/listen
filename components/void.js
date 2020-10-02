import Head from 'next/head'

export default function Void() {
	return (
		<>
			<Head>
				<meta name='robots' content='noindex' />
			</Head>
			<p className='error'>Oops</p>
		</>
	)
}
