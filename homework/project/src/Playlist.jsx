import { Song } from "./Song"

export const Playlist = ({ items, onMove }) => {
    return <>
        <h1>
            Songs {items.length}
        </h1>
        {items.map((song, index) => (
            <Song
                key={song.id}
                {...song}
                inPlaylist={true}
                moveDown={() => onMove(index)}
            />
        ))}
    </>
}