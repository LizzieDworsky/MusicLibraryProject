import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
        getAllSongs();
    }, []);

    async function getAllSongs() {
        let response = await axios.get("http://127.0.0.1:8000/song/");
        setSongs(response.data);
    }

    return (
        <div>
            <footer>
                <button onClick={getAllSongs}>Remake API Call</button>
            </footer>
        </div>
    );
}

export default App;
