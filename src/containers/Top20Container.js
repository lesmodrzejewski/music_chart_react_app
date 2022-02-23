import { useState, useEffect } from "react";
import "../css/Top20Container.css"


import SongList from "../components/SongList";
import SongPictures from "../components/SongPictures";


const Top20Container = () => {

    const [songList, setSongList] = useState([])

    useEffect(() => {
        getSongs()
    }, [])

    const getSongs = () => {

        fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
        .then(res => res.json())
        .then(data => setSongList(data.feed.entry))
    }


    return (
        <div className="pictures-and-songs-container">
            <SongPictures songList={songList} />
            <SongList songList={songList}/>
        </div>
    );
}

export default Top20Container