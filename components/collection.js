import Link from 'components/link'

function Collection({ title, description, tracks }) {
	return (
		<main className='collection'>
			<h1>{title}</h1>
			<h2 className='description'>{description}</h2>
			<ol className='tracks'>
            {tracks?.map(track => <Track key={track.title} {...track} />)}
				<li className='track'>
					<Link href='/mmxx/import' className='plus'>+</Link>
					<Link href='/mmxx/import' className='import'>Import a new track</Link>
				</li>
			</ol>
		</main>
	)
}

function Track({ number, title, artist }) {
	return (
		<li className='track'>
			{number && <span className='number'>{number}</span>}
			<h3 className='title'>{title}</h3>
			{artist && <p className='artist'>{artist}</p>}
		</li>
	)
}

export default Collection
