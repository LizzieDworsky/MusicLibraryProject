import React from "react";
import { useState } from "react";

const AddSong = ({ addSong }) => {
    const [title, setTitle] = useState();
    const [artist, setArtist] = useState();
    const [album, setAlbum] = useState();
    const [releaseDate, setReleaseDate] = useState();
    const [genre, setGenre] = useState();

    async function handleAdd(event) {
        event.preventDefault();
        let newEntry = {
            title: title,
            artist: artist,
            album: album,
            release_date: releaseDate,
            genre: genre,
        };
        await addSong(newEntry);
    }

    return (
        <form onSubmit={(event) => handleAdd(event)}>
            <label>Title</label>
            <input
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            <label>Album</label>
            <input
                type="text"
                value={album}
                onChange={(event) => setAlbum(event.target.value)}
            />
            <label>Artist</label>
            <input
                type="text"
                value={artist}
                onChange={(event) => setArtist(event.target.value)}
            />
            <label>Genre</label>
            <input
                type="text"
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
            />
            <label>Release Date</label>
            <input
                type="text"
                value={releaseDate}
                onChange={(event) => setReleaseDate(event.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddSong;
