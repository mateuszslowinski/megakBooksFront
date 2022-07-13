import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

import './Searchbar.css';

export const Searchbar = () => {
    const [term, setTerm] = useState<string>('');
    const navigate = useNavigate();

    const search = () => {
        navigate(`/search/${term}`)
    }

    return (
        <div className="searchbar_container">
            <input
                value={term}
                onChange={(e) => setTerm(e.target.value)}
                onKeyPress={e => {
                    if (e.key === 'Enter') search()
                }}
                type="text"
                placeholder="Tytuł książki..."/>
            <button className='btn' onClick={search}>Szukaj</button>
        </div>
    )
}