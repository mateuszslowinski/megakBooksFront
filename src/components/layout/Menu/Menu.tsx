import React from "react";
import {Searchbar} from "../../common/Searchbar/Searchbar";

import './Menu.css';
export const Menu = () => {
    return (
        <div className="menu_container">
            <ul className="menu_links">
                <li className="menu_item">
                    <a href="/">Strona główna</a>
                </li>
                <li className="menu_item">
                    <a href="books">Moje książki</a>
                </li>
                <li className="menu_item">
                    <a href="books/ad">Dodaj książkę</a>
                </li>
            </ul>
            <Searchbar/>
        </div>
    )
}
