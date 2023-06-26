import React from 'react';
import './TodoSearch.css';

function TodoSearch(
    {
        searcValue,
        setSearchValue,
    }
) {

    return (
        <input
            placeholder="A cada dia su afán."
            className='TodoSearch'
            value={searcValue}
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };