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
            <div className="add-input-song">
                <label className="add-song-label">Title</label>
                <input
                    className="title-input"
                    type="text"
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
            </div>
            <div className="add-input-song">
                <label className="add-song-label">Album</label>
                <input
                    className="album-input"
                    type="text"
                    value={album}
                    onChange={(event) => setAlbum(event.target.value)}
                />
            </div>
            <div className="add-input-song">
                <label className="add-song-label">Artist</label>
                <input
                    className="artist-input"
                    type="text"
                    value={artist}
                    onChange={(event) => setArtist(event.target.value)}
                />
            </div>
            <div className="add-input-song">
                <label className="add-song-label">Genre</label>
                <input
                    className="genre-input"
                    type="text"
                    value={genre}
                    onChange={(event) => setGenre(event.target.value)}
                />
            </div>
            <div className="add-input-song">
                <label className="add-song-label">Release Date</label>
                <input
                    className="date-input"
                    type="text"
                    value={releaseDate}
                    onChange={(event) => setReleaseDate(event.target.value)}
                />
            </div>
            <button className="add-button" type="submit">
                Add
            </button>
        </form>
    );
};

export default AddSong;
