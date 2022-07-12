import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Book} from "../Books/Book/Book";
import {Message} from "../../common/Message/Message";
import {BookEntity} from 'types';

import './Search.css';

export const Search = () => {
    const [books, setBooks] = useState<BookEntity[]>([]);
    const {term} = useParams();


    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/books');
            const data = await res.json();
            setBooks(data);
            if (term !== undefined) {
                const res = await fetch(`http://localhost:3001/search/${term}`);
                const data = await res.json();
                setBooks(data);
            }
        })();
    }, [term])


    if (term === undefined) {
        return <Message text="Wpisz szukany tytuł."/>
    }

    return (
        <>
            {books.length === 0
                ? <Message text={`Brak wyników dla ${term}`}/>
                : <>
                    <h2>Wyniki wyszukiwania dla {term}</h2>
                    <div className="books_container">
                        {books.map(book => (
                            <Book
                                key={book.id}
                                {...book}
                            />
                        ))}
                    </div>
                </>}
        </>)
}

