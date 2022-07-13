import React, {useContext} from "react";
import {BooksContext} from "../../context/BooksContext/BooksContext";

import './SelectOptions.css';

export const SelectOptions = () => {
    const {setSortValue} = useContext(BooksContext);

    const options = [
        {
            label: 'Alfabetycznie po tytule',
            value: 'default'
        }, {
            label: 'Najlepiej oceniane',
            value: 'best',
        }, {
            label: 'Najgorszej oceniane',
            value: 'worse',
        }
    ];

    const handleChange = (e: React.FormEvent<HTMLSelectElement>): void => {
        const element = e.target as HTMLSelectElement;
        setSortValue(element.value);
    };

    return (
        <div className="select_container">
            <p>Uszerguj:</p>
            <select onChange={e => handleChange(e)}>
                {
                    options.map((option,) => (
                        <option key={option.value} value={option.value}>{option.label}</option>
                    ))
                }
            </select>
        </div>
    )
}