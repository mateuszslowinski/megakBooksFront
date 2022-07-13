import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {Book} from "../Books/Book/Book";
import {Message} from "../../common/Message/Message";
import {Pagination} from "../../common/Pagination/Pagination";
import {apiUrl} from "../../../config/api";
import {BookEntity} from 'types';

import './Search.css';



export const Search = () => {
    const [books, setBooks] = useState<BookEntity[]>([]);
    const [pageNumber, setPageNumber] = useState<number>(0);
    const {term} = useParams();

    const bookPerPage = 6;
    const pagesVisited = pageNumber * bookPerPage;
    const pageCount = Math.ceil(books.length / bookPerPage)
    const changePage = ({selected}: { selected: number }): void => {
        setPageNumber(selected);
    };


    useEffect(() => {
        (async () => {
            const res = await fetch(`${apiUrl}/books`);
            const data = await res.json();
            setBooks(data);
            if (term !== undefined) {
                const res = await fetch(`${apiUrl}/search/${term}`);
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
                        {books.slice(pagesVisited, pagesVisited + bookPerPage).map(book => (
                            <Book
                                key={book.id}
                                {...book}
                            />
                        ))}
                    </div>
                    <Pagination pageCount={pageCount} onChange={changePage}/>
                </>}
        </>)
}

