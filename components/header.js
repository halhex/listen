import { memo } from 'react'
import useGreeting from '../hooks/greeting'

// Todo: Welcome back!
function Header({from}) {
    const [greeting, refresh] = useGreeting()

    return (
        <header id="header">
            <p className='greeting'>{greeting}</p>
        </header>
    )
}

export default memo(Header)
