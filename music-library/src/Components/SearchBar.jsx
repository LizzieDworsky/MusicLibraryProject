import React from "react";

const SearchBar = ({ setState }) => {
    function filter(event) {
        event.preventDefault();
    }

    return (
        <form onSubmit={(event) => filter(event)}>
            <input onChange={(event) => setState(event.target.value)} />
            <button type="submit">Filter</button>
        </form>
    );
};

export default SearchBar;
