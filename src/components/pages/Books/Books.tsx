import React, {useEffect, useState} from "react";
import ReactPaginate from "react-paginate";
import {Book} from "./Book/Book";
import {Message} from "../../common/Message/Message";
import {BookEntity} from 'types';

import './Books.css'


export const Books = () => {

    const [books, setBooks] = useState<BookEntity[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const [loading, setLoading] = useState(true);


    const bookPerPage = 9;
    const pagesVisited = pageNumber * bookPerPage;

    const pageCount = Math.ceil(books.length / bookPerPage)


    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:3001/books');
            const data = await res.json();
            setBooks(data);
            setLoading(false);
        })();
    },[]);

    const changePage = ({selected}: { selected: number }): void => {
        setPageNumber(selected);
    };

    if (loading) {
        return <Message text=">Wczytywanie danych..."/>
    }

    return (
        <> {books.length !== 0
            ? <>
                <h2>Najlepiej ocenione książki:</h2>
                <div className='books_container'>
                    {books.slice(pagesVisited, pagesVisited + bookPerPage).map(book => (
                        <Book
                            key={book.id}
                            {...book}
                        />
                    ))}
                    <ReactPaginate
                        previousLabel={"Poprzednia"}
                        nextLabel={"Następna"}
                        pageCount={pageCount}
                        onPageChange={changePage}
                        containerClassName={"paginationBttns"}
                        activeClassName={"paginationActive"}
                    />
                </div>
            </>
            : <Message text="Dodaj książki do swojej biblioteki"/>}

        </>

    )
}