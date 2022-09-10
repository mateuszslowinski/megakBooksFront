import React, {useEffect, useState} from "react";
import axios from "axios";
import {apiUrl} from "../../../config/api";
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

    const bookPerPage = 8;
    const pagesVisited = pageNumber * bookPerPage;

    const pageCount = Math.ceil(books.length / bookPerPage)


    useEffect(() => {
        (async () => {
            if (sortValue === 'best') {
                const res = await axios.get(`${apiUrl}/select/increase`);
                setBooks(res.data);
            } else if (sortValue === 'worse') {
                const res = await axios.get(`${apiUrl}/select/decrease`);
                setBooks(res.data);
            } else {
                const res = await axios(`${apiUrl}/select/alphabetically`);
                setBooks(res.data);
            }
            setLoading(false);
        })()
    }, [sortValue])

    const changePage = ({selected}: { selected: number }): void => {
        setPageNumber(selected);
    };

    if (loading) {
        return <Message text="Wczytywanie danych..."/>
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