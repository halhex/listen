import { useMemo } from "react";
import { useDocument, useCollection } from "./firebase";

function group(collection, by) {
    return collection?.reduce((collections, document) => {
        const name = `${document[by]}s`
        collections[name] = collections[name]
            ? [...collections[name], document]
            : [document]

        return collections
    }, { })
}

export default function useLibrary(id) {
    const document = useDocument(id)
    const collection = useCollection(id)

    return [document, collection]
}
