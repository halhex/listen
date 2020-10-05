import { useState } from 'react'
import Form from 'components/form'
import { useRouter } from 'next/router'
import { useLibrary } from 'hooks/firebase'

export default function Import() {
	const { push: redirect, query: { collection } } = useRouter()
	const { push } = useLibrary(collection)
	const [title, setTitle] = useState('')
   const [artist, setArtist] = useState('')

	const submit = () => push(title, artist)
		.then(() => redirect('/mmxx', '/mmxx', { shallow: true }))

	return (
		<main className='import'>
			<header>
				<h1>Import a new track to MMXX</h1>
				<p>
					You can also share a track from Spotify, Tidal, Bandcamp,
					etc. with listen to import it.
				</p>
			</header>
			<Form onSubmit={submit}>
				<input
					name='title'
					className='title'
					type='text'
					value={title}
					placeholder='Title'
               onChange={({ target: { value } }) => setTitle(value)}
               autoFocus
				/>
				<input
					name='artist'
					className='artist'
					type='text'
					value={artist}
					placeholder='by...'
					onChange={({ target: { value } }) => setArtist(value)}
				/>

            <button disabled={!title?.length}>Import!</button>
			</Form>
		</main>
	)
}
