import { memo } from 'react'
import Link from './link'
import useGreeting from '../hooks/greeting'

// Todo: Welcome back!
function Header() {
    const [greeting] = useGreeting()

    return (
        <header id="header">
            <p className='greeting'>{greeting}</p>
            <h1 className='title'>Shabrang</h1>
            <p className='menu'>&#9776;</p>
        </header>
    )
}

export default memo(Header)
