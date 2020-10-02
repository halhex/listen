import { getDocument, getCollection } from 'lib/firebase'

import Collection from 'components/collection'
import lazy from 'components/lazy'
import Void from 'components/void'

function Listen({ title, library }) {
	if (!title) return <Void />

	console.log(library)
	return <Collection title={title} />
}

export default lazy(Listen)

export async function getStaticProps({ params: { listen: id } }) {
	const document = await getDocument(id)
	if (!document) return { props: {}, revalidate: 60 }
	if (document.type == 'track') return { props: document }

	const library = await getCollection(id)
	return {
		props: {
			title: document.title ?? 'Welcome',
			library
		}
	}
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: true
	}
}
