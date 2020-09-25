import { memo } from 'react'
import Link from './link'
import useGreeting from '../hooks/greeting'

function Header({title}) {
    return (
        <header id="header">
            <h1 className='title'>{title}</h1>
        </header>
    )
}

export default memo(Header)
