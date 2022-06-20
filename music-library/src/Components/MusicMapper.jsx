import React from "react";

import Song from "./Song";

const MusicMapper = ({ array }) => {
    return (
        <table>
            <thead>
                <tr>
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
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.album}</td>
                        <td>{item.artist}</td>
                        <td>{item.genre}</td>
                        <td>{item.release_date}</td>
                        <td>{item.likes}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MusicMapper;
