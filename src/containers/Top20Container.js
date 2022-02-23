import { useState, useEffect } from "react";

import SongList from "../components/SongList";


const Top20Container = () => {

    const [songList, setSongList] = useState(null)

    useEffect( () => {
        getSongs();
    }, [])

    const getSongs = () => {
        fetch("https://itunes.apple.com/gb/rss/topsongs/limit=20/json")
        .then(res => res.json())
        .then(songs => setSongList(songs))
    }




    
    return (

        <SongList />
    );
}

export default Top20Container;