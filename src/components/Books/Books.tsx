import React from "react";
import {Book} from "./Book/Book";


import './Books.css'

export const Books = () => {
    return (
        <>
            <h2>Najlepiej ocenione książki:</h2>
            <div className='books_container'>
                <Book/>
                <Book/>
                <Book/>
            </div>
        </>

    )
}