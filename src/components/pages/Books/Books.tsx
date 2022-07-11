import React, {useEffect, useState} from "react";
import {Book} from "./Book/Book";
import {Message} from "../../common/Message/Message";
import {BookEntity} from 'types';

import './Books.css'

export const Books = () => {

    const [books, setBooks] = useState<BookEntity[]>([])
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/books');
            const data = await res.json();
            setBooks(data);
            setLoading(false);
        })();
    })


    if (loading) {
        return <Message text=">Wczytywanie danych..."/>
    }

    return (
        <>
            <h2>Najlepiej ocenione książki:</h2>
            <div className='books_container'>
                {books.map(book => (
                    <Book
                        key={book.id}
                        {...book}
                    />
                ))}
            </div>
        </>

    )
}