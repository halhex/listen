import { getDocument, getCollection } from '../lib/firebase'

import Header from '../components/header'
import Void from '../components/void'
import Loading from '../components/loading'
import { useFallback } from '../hooks/router'
import lazy from '../components/lazy'

function Listen({title, library}) {
    if (!title)
        return <Void/>

    return (
        <>
            <Header title={title}/>
            <main>

            </main>
        </>
    )
}

export default lazy(Listen)

export async function getStaticProps({params: {listen: id}}) {
    const document = await getDocument(id)
    if (!document)
        return { props: {}, revalidate: 60 }
    if (document.type == 'track')
        return { props: document }

    const library = await getCollection(id)

    return {
        props: {
            title: document.title ?? 'Welcome',
            library
        },
        // revalidate: 60
    }
}

export async function getStaticPaths() {
    return {
        paths: [], // Get collections
        fallback: true
    }
}
