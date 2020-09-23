import Anchor from 'next/link'

export default function Link({href, children, ...props}) {
    return <Anchor shallow href={href}><a {...props}>{children ?? href}</a></Anchor>
}
