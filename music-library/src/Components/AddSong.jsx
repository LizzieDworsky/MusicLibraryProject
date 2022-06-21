import React from "react";
import { useState } from "react";

const AddSong = ({ setState }) => {
    const [title, setTitle] = useState();
    const [artist, setArtist] = useState();
    const [album, setAlbum] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [genre, setGenre] = useState();

    function handleAdd(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        };
        setState(newEntry);
    }

    return (
        <form onSubmit={(event) => handleAdd(event)}>
            <label>Title</label>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
        </form>
    );
};

export default AddSong;
