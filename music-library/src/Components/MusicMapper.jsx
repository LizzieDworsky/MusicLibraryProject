import React from "react";

import Song from "./Song";

const MusicMapper = ({ array }) => {
    return (
        <ul>
            {array.map((element) => (
                <li>
                    <Song song={element} />
                </li>
            ))}
        </ul>
    );
};

export default MusicMapper;
