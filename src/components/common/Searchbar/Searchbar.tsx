import React from "react";
import './Searchbar.css';
import {Btn} from "../Btn/Btn";

export const Searchbar = () => {
    return (
        <div className="searchbar_container">
            <input type="text" placeholder="Tytuł książki..."/>
            <Btn text="Szukaj"/>
        </div>
    )
}