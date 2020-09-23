import Link from '../components/link'

const tracks = [
    {
        title: 'Joanna',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Shabrang',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Lamp Lady',
        artist: 'Sevdaliza',
        album: 'Shabrang',
        loved: true
    }, {
        title: 'All Rivers at Once',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Habibi',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Dormant',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Wallflower',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Gole Bi Goldoon',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Darkest Hour',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Oh My God',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Eden',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Human Nature',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'No Way',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Rhode',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }, {
        title: 'Comet',
        artist: 'Sevdaliza',
        album: 'Shabrang'
    }
]

const collection = {
    title: 'Shabrang',
    pieces: tracks
}

function Item({title}) {
    return (
        <li onClick={() => console.log(title)}>
            <h2 className='title'><Link href={`/${title}`}>{title}</Link></h2>
            <h3 className='artist'>Sevdaliza</h3>
        </li>
    )
}

export default function Listen() {

    const items = collection.pieces.map(piece => <Item key={piece.title} title={piece.title}/>)
    return (
        <ol>
            {items}
        </ol>
    )
}
