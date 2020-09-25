import { useRouter } from 'next/router'

export function useFallback() {
    return useRouter().isFallback
}

export function useParams() {
    return useRouter().query
}
