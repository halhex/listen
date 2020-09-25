import { useMemo, useState } from 'react'

function between(min, max) {
	return Math.floor(Math.random() * (max - min)) + min
}

function within(collection) {
	if (!collection?.length)
		throw new Error('useRandom must be used on a collection')

	return collection[between(0, collection.length)]
}

export default function useRandom(from, to) {
	const refresh = useMemo(
		() => (to ? () => between(from, to) : () => within(from)),
		[from, to]
	)

	const [value, setValue] = useState(refresh)
	return [value, () => setValue(refresh)]
}
