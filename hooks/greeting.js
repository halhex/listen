import useRandom from 'hooks/random'

const greetings = ['hey!', 'hello,', 'hi,']

export default function useGreeting() {
	return useRandom(greetings)
}
