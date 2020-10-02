import { getDocument, getCollection } from 'lib/firebase'

import Collection from 'components/collection'
import lazy from 'components/lazy'
import Void from 'components/void'

function Listen({ title, description, library }) {
	if (!title) return <Void />

	return <Collection
		title={title}
		description={description}
		tracks={library}
	/>
}

export default lazy(Listen)

export async function getStaticProps({ params: { collection: id } }) {
	const document = await getDocument(id)
	if (!document) return { props: {}, revalidate: 60 }
	if (document.type == 'track') return { props: document }

	const library = await getCollection(id)
	return {
		props: {
			title: document.title ?? 'Welcome',
			description: document.description,
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
