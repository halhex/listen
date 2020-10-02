import { useState } from 'react'
import Form from 'components/form'
import useFirebase from 'hooks/firebase'

export default function Import() {
   const firebase = useFirebase()
	const [title, setTitle] = useState('')
   const [artist, setArtist] = useState('')

   const submit = () => {
      firebase
         .firestore()
         .collection('music')
         .doc('mmxx')
         .collection('collection')
         .add({title, artist, type: 'track', number: 3})
   }

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
