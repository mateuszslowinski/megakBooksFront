import React from "react";
import { Link } from "react-router-dom";
import {Searchbar} from "../../common/Searchbar/Searchbar";

import './Menu.css';
export const Menu = () => {
    return (
        <div className="menu_container">
            <ul className="menu_links">
                <li className="menu_item">
                    <Link to="/">Strona główna</Link>
                </li>
                <li className="menu_item">
                    <Link to="books">Moje książki</Link>
                </li>
                <li className="menu_item">
                    <Link to="books/ad">Dodaj książkę</Link>
                </li>
            </ul>
            <Searchbar/>
        </div>
    )
}
