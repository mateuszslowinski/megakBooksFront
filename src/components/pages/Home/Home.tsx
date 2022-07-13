import React, {useEffect, useState} from "react";
import {Book} from "../Books/Book/Book";
import {Message} from "../../common/Message/Message";
import {apiUrl} from "../../../config/api";
import {BookEntity} from 'types';



export const Home = () => {

    const [books, setBooks] = useState<BookEntity[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/books`);
            const data = await res.json();
            const sortedBooksAtRating = data.sort((a: BookEntity, b: BookEntity) => (a.rating > b.rating) ? -1 : 1);
            sortedBooksAtRating.splice(4, sortedBooksAtRating.length);
            setBooks(sortedBooksAtRating);
            setLoading(false);
        })();
    }, [])

    if (loading) {
        return <Message text="Wczytywanie danych..."/>
    }

    return (
        <>
            {books.length !== 0
                ?
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
                : <Message text="Dodaj książki do swojej biblioteki"/>}
        </>
    )
}