import SongItem from "./SongItem"
import "../css/SongList.css"

const SongList = ({songList}) => {

    const songListItems = songList.map((song, index) => {
        return <SongItem key={index} index={index + 1} song={song.title.label} />
    })

    
    return (
        <>
        <ul className="song-list">
            {songListItems}
        </ul>
        </>
    )
}

export default SongList;