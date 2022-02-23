import { useState, useEffect } from "react";
import "../css/Top20Container.css"


import SongList from "../components/SongList";


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
        <>
            <SongList songList={songList}/>
        </>
    );
}

export default Top20Container