import { createContext, useContext, useEffect, useState } from 'react'

const Context = createContext()

export const contextual = (Component, initialValue) => props => {
	const [value, setter] = useState(initialValue ?? {})

	return (
		<Context.Provider value={[value, setter]}>
			<Component {...props} />
		</Context.Provider>
	)
}

export function useMeta(tag, value) {
	const [context, setContext] = useContext(Context)

	useEffect(() => value && setContext(context => { return {
		...context,
		meta: { ...context.meta, [tag]: value }}
	}), [value])

	return tag ? context.meta?.[tag] : context.meta ?? {}
}

export const useTitle = title => useMeta('title', title)
export const useDescription = description => useMeta('description', description)
