import React from "react";

const MusicMapper = ({ array, deleteSong, likeSong }) => {
    async function handleDelete(itemId) {
        deleteSong(itemId);
    }
    async function handleLike(itemId) {
        likeSong(itemId);
    }

    return (
        <table>
            <thead>
                <tr className="table-headings">
                    <th>Song Title</th>
                    <th>Album</th>
                    <th>Artist</th>
                    <th>Genre</th>
                    <th>Release Date</th>
                    <th>Likes</th>
                </tr>
            </thead>
            <tbody>
                {array.map((item) => (
                    <tr className="table-content" key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.album}</td>
                        <td>{item.artist}</td>
                        <td>{item.genre}</td>
                        <td>{item.release_date}</td>
                        <td>{item.likes}</td>
                        <button
                            className="like-button"
                            onClick={(event) => handleLike(item.id)}
                        >
                            Like
                        </button>
                        <button
                            className="table-button"
                            onClick={(event) => handleDelete(item.id)}
                        >
                            Delete
                        </button>
                        <button id="open" className="table-button">
                            Testing
                        </button>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MusicMapper;
