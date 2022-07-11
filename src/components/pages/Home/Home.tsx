import React, {useEffect, useState} from "react";
import { Book } from "../Books/Book/Book";
import {BookEntity} from 'types';

export const Home = () => {

    const [books, setBooks] = useState<BookEntity[]>([]);

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/books');
            const data = await res.json();
            const sortedBooksAtRating = data.sort((a: BookEntity, b: BookEntity) => (a.rating > b.rating) ? -1 : 1);
            sortedBooksAtRating.splice(3, sortedBooksAtRating.length);
            setBooks(sortedBooksAtRating);
        })();
    }, [])


    return (
        <>
                <div>
                    <h2>Najlepiej ocenione książki:</h2>
                    <div className='books_container'>
                        {books.map(book => (
                            <Book
                                key={book.id}
                                {...book}
                            />
                        ))}
                    </div>
                </div>
        </>
    )
}