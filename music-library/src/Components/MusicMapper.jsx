import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";

const MusicMapper = ({ array, deleteSong, likeSong }) => {
    // const [show, setShow] = useState(false);

    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);

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
                        <td>
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
                            {/* <button onClick={handleShow}>Test Modal</button>
                            <Modal
                                show={show}
                                onHide={handleClose}
                                backdrop="static"
                                keyboard={false}
                            >
                                <Modal.Header closeButton>
                                    <Modal.Title>Modal Title</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    I don't know what I'm doing...
                                </Modal.Body>
                                <Modal.Footer>
                                    <button onClick={handleClose}>Close</button>
                                </Modal.Footer>
                            </Modal> */}
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default MusicMapper;
