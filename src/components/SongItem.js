import "../css/SongItem.css"

const SongItem = ({index, song}) => {

    return <li className="artist-and-title-item">Number {index}. {song}</li>
}

export default SongItem;