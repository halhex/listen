import firebase from 'firebase/app'
import 'firebase/firestore'

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

export default firebase

export async function getDocument(id) {
	const document = await music.doc(id).get()

	return document.exists ? document.data() : undefined
}

export async function getCollection(id) {
	const collection = await music.doc(id).collection('collection').get()

	return collection.docs.map((document) => document.data())
}
