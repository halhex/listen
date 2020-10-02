export default function Form({ onSubmit, children }) {
	const submit = event => {
		if (!onSubmit) return

		event.preventDefault()
		onSubmit(event)
	}

	return <form onSubmit={submit}>{children}</form>
}
