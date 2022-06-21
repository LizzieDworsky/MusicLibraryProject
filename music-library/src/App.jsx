import React, { useState, useEffect } from "react";
import axios from "axios";

import NavigationBar from "./Components/NavigationBar";
import SearchBar from "./Components/SearchBar";
import MusicMapper from "./Components/MusicMapper";

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

    function filterSongs() {
        let tempFilteredSongs = songs.filter((item) => {
            if (
                item.release_date === filter ||
                item.album === filter ||
                item.artist === filter ||
                item.genre === filter
            ) {
                return true;
            }
        });
        setSongs(tempFilteredSongs);
    }

    return (
        <div>
            <NavigationBar />
            <SearchBar setState={setFilter} />
            <button onClick={filterSongs}>Filter</button>
            <button onClick={getAllSongs}>Refresh Song List</button>
            <MusicMapper array={songs} />
            <footer></footer>
        </div>
    );
}

export default App;
