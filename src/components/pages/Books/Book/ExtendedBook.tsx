import React, {useEffect, useState} from "react";
import {Link, useNavigate, useParams} from "react-router-dom";
import {Btn} from "../../../common/Btn/Btn";
import {BookElement} from "./BookElement";
import {Message} from "../../../common/Message/Message";
import {BookEntity} from 'types';

import './Book.css';


export const ExtendedBook = () => {
    const [book, setBook] = useState<BookEntity | null>(null);
    const navigate = useNavigate();
    const {id} = useParams();


    useEffect(() => {
        (async () => {
            const res = await fetch(`http://localhost:3001/books/${id}`);
            const data = await res.json();
            setBook(data);
        })();
    }, [id]);


    const removeBook = async () => {
        try {
            await fetch(`http://localhost:3001/books/${id}`, {
                method: "DELETE",
            });
        } finally {
            navigate('/');
        }
    }

    if (book === null) {
        return <Message text="Wczytywanie danych..."/>
    }

    const {title, author, rating, publisher, pages, species, desc} = book;

    return (
        <div className="book_container" style={{margin: '5px'}}>
            <div className="book_info">
                <BookElement class="title" header="Tytuł:" value={title}/>
            </div>
            <div className="container_author_rating">
                <BookElement class="author" header="Autor:" value={author}/>
                <BookElement class="rating" header="Ocena:" value={rating}/>
            </div>
            <div className="info">
                <BookElement class="publisher" header="Wydawca:" value={publisher}/>
                <BookElement class="pages" header="Liczba Stron:" value={pages}/>
                <BookElement class="species" header="Gatunek:" value={species}/>
            </div>
            <BookElement class="desc" header="Opis:" value={desc}/>
            <div className="books_buttons">
                <Link className='btn' to={`/books/edit/${id}`}>Edytuj</Link>
                <Btn text="Usuń" onClick={removeBook}/>
            </div>
        </div>
    )
}