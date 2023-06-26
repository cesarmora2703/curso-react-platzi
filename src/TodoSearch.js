import React from 'react';
import './TodoSearch.css';

function TodoSearch() {
    const [searchValue, setSearchValue] = React.useState('');

    console.log("Se ha buscado: " + searchValue)

    return (
        <input
            placeholder="A cada dia su afán."
            className='TodoSearch'
            onChange={(event) => {
                setSearchValue(event.target.value);
            }}
        />
    );
}

export { TodoSearch };