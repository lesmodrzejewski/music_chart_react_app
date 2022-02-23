import SongPicture from "./SongPicture";

const SongPictures =  ({songList}) => {

    const songPictureList = songList.map((song, index) => {
        return <SongPicture key={index} songPicture={song['im:image'][0].label} />
    })

    return (
        <>
        <ul>
            {songPictureList}
        </ul>
        </>
      );
}

export default SongPictures ;