import React from "react";

const MusicMapper = ({ array }) => {
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
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MusicMapper;
