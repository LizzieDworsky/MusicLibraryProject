import React, { useState, useEffect } from "react";
import axios from "axios";

import NavigationBar from "./Components/NavigationBar";
import SearchBar from "./Components/SearchBar";
import MusicMapper from "./Components/MusicMapper";
import AddSong from "./Components/AddSong";

function App() {
    const [songs, setSongs] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        getAllSongs();
    }, []);

    async function getAllSongs() {
        let response = await axios.get("http://127.0.0.1:8000/song/");
        setSongs(response.data);
    }

    async function createSong(newSong) {
        let response = await axios.post("http://127.0.0.1:8000/song/", newSong);
        if (response.status === 201) {
            await getAllSongs();
        }
    }

    function filterSongs() {
        let tempFilteredSongs = songs.filter((item) => {
            if (
                item.release_date === filter ||
                item.album === filter ||
                item.artist === filter ||
                item.genre === filter ||
                item.title === filter
            ) {
                return true;
            }
        });
        setSongs(tempFilteredSongs);
    }

    return (
        <div className="content-container">
            <header>
                <NavigationBar />
            </header>
            <main>
                <div className="search-bar">
                    <SearchBar setState={setFilter} className="filter-input" />
                    <button className="filter-button" onClick={filterSongs}>
                        Filter
                    </button>
                    <button className="reset-list-button" onClick={getAllSongs}>
                        Refresh Song List
                    </button>
                </div>
                <div className="music-mapper">
                    <MusicMapper array={songs} />
                </div>
                <div className="add-song">
                    <AddSong addSong={createSong} />
                </div>
            </main>
            <footer></footer>
        </div>
    );
}

export default App;
