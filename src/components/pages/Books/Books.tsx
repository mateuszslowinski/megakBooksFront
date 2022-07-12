import React, {useEffect, useState} from "react";
import {BooksContext} from "../../context/BooksContext/BooksContext";
import {Pagination} from "../../common/Pagination/Pagination";
import {Book} from "./Book/Book";
import {Message} from "../../common/Message/Message";
import {SelectOptions} from "../../utils/SelectOptions/SelectOptions";
import {BookEntity} from 'types';

import './Books.css'


export const Books = () => {

    const [books, setBooks] = useState<BookEntity[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const [sortValue, setSortValue] = useState('');

    const bookPerPage = 9;
    const pagesVisited = pageNumber * bookPerPage;

    const pageCount = Math.ceil(books.length / bookPerPage)


    useEffect(() => {
        (async () => {
            if (sortValue === 'best') {
                const res = await fetch('http://localhost:3001/select/increase');
                const data = await res.json();
                setBooks(data);
            } else if (sortValue === 'worse') {
                const res = await fetch('http://localhost:3001/select/decrease');
                const data = await res.json();
                setBooks(data);
            } else {
                const res = await fetch('http://localhost:3001/select/alphabetically');
                const data = await res.json();
                setBooks(data);
            }
            setLoading(false);
        })()
    }, [sortValue])

    const changePage = ({selected}: { selected: number }): void => {
        setPageNumber(selected);
    };

    if (loading) {
        return <Message text=">Wczytywanie danych..."/>
    }

    return (
        <> {books.length !== 0
            ? <>
                <BooksContext.Provider value={{sortValue, setSortValue}}>
                    <h2>Najlepiej ocenione książki:<SelectOptions/></h2>

                    <div className='books_container'>
                        {books.slice(pagesVisited, pagesVisited + bookPerPage).map(book => (
                            <Book
                                key={book.id}
                                {...book}
                            />
                        ))}
                        <Pagination pageCount={pageCount} onChange={changePage}/>
                    </div>
                </BooksContext.Provider>
            </>
            : <Message text="Dodaj książki do swojej biblioteki"/>}
        </>
    )
}