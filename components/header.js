import useGreeting from 'hooks/greeting'

export default function Header() {
	const greeting = 'hi,'

	return (
		<header className='greeting'>
			<p>{greeting}</p>
			<a href='#' className='menu'>Settings</a>
		</header>
	)
}
