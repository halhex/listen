import firebase from 'firebase/app'
import 'firebase/firestore'
import { useEffect, useMemo, useState } from 'react'

try {
	firebase.initializeApp({
		apiKey: 'AIzaSyBwt-ZwnunynQte9Rel0_UqqowkXVYolyU',
		authDomain: 'halhex-f430c.firebaseapp.com',
		databaseURL: 'https://halhex-f430c.firebaseio.com',
		projectId: 'halhex-f430c',
		storageBucket: 'halhex-f430c.appspot.com',
		messagingSenderId: '1010489831113',
		appId: '1:1010489831113:web:e13bacfaea6b0063da6718'
	})
} catch (err) {
	console.error(err)
	if (!/already exists/.test(err.message))
		// Ignore 'already exists' when hot-reloading
		throw err
}

const firestore = firebase.firestore
const music = firestore().collection('music')

export default function useFirebase() {
	return firebase
}

export function useLibrary(id) {
	function push(title, artist) {
		const document = music.doc(id)
		const track = document.collection('collection').doc()

		return firestore().runTransaction(async (transaction) => {
			const doc = await transaction.get(document)
			if (!doc.exists) throw 'Library does not exists!'

			const size = doc.data().size
			transaction.set(track, {
				title,
				artist,
				type: 'track',
				number: size + 1
			})

			transaction.update(document, {
				size: firestore.FieldValue.increment(1)
			})
		})
	}

	return { push }
}

// Todo: documentation
const use = (empty, load, read) => (id) => {
	const [state, setState] = useState()
	const data = useMemo(() => (state ? read(state) : empty), [state])

	useEffect(() => id && load(id).onSnapshot(setState), [id])

	return data
}

export const useDocument = use(
	{},
	(id) => music.doc(id),
	(document) =>
		document.exists ? document.data() : { error: 'document not found' }
)

export const useCollection = use(
	[],
	(id) => music.doc(id).collection('collection'),
	(collection) => collection?.docs.map((document) => document.data())
)
