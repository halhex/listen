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
	(id) => music.doc(id).collection('library'),
	(collection) => collection?.docs.map((document) => document.data())
)
