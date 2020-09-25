import Loading from 'components/loading'
import { useFallback } from 'hooks/router'

const lazy = (Component, Fallback = Loading) => (props) => {
	const fallback = useFallback()

	return fallback ? <Fallback /> : <Component {...props} />
}

export default lazy
