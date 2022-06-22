import React from "react";

const SearchBar = ({ setState }) => {
    return (
        <form className="filter-form">
            <input
                className="filter-input"
                onChange={(event) => setState(event.target.value)}
            />
        </form>
    );
};

export default SearchBar;
