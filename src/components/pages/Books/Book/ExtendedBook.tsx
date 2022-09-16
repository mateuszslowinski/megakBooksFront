import React, {useEffect, useState} from "react";
import axios from "axios";
import {NavLink, useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../app/store";
import {addUserBook, getUserBooks, removeUserBook} from "../../../../features/user/userActions";
import {apiUrl} from "../../../../config/api";
import {BookElement} from "./BookElement";
import {Message} from "../../../common/Message/Message";
import {Btn} from "../../../common/Btn/Btn";
import {UserState} from "../../../../features/user/userSlice";
import {BookEntity} from 'types';

import './Book.css';

export const ExtendedBook = () => {
    const {userInfo, books}: UserState = useSelector((store: RootState) => store.users);
    const [book, setBook] = useState<BookEntity | null>(null);
    const navigate = useNavigate();
    const {id} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        (async () => {
            const res = await axios.get(`${apiUrl}/books/${id}`);
            setBook(res.data);
        })();
    }, [id]);

    if (book === null) {
        return <Message text="Wczytywanie danych..."/>
    }

    const handleAddBookToCollectionClick = () => {

        dispatch(addUserBook({userId: userInfo?.id, bookId: id}));
        dispatch(getUserBooks());
        navigate('/')
    };
    const handleRemoveBookFromCollectionClick = () => {

        const searchedBook = books.find((book) => book.id === id)
        if (searchedBook) {
            dispatch(removeUserBook(searchedBook.ID));
            dispatch(getUserBooks());
            navigate('/')
        }
    };

    const {title, author, rating, publisher, pages, species, desc} = book;

    return (
        <div className="book_container">
            <div className="book_info">
                <BookElement className="title" header="Tytuł:" value={title}/>
            </div>
            <div className="container_author_rating">
                <BookElement className="author" header="Autor:" value={author}/>
                <BookElement className="rating" header="Ocena:" value={rating}/>
            </div>
            <div className="info">
                <BookElement className="publisher" header="Wydawca:" value={publisher}/>
                <BookElement className="pages" header="Liczba Stron:" value={pages}/>
                <BookElement className="species" header="Gatunek:" value={species}/>
            </div>
            <BookElement className="desc" header="Opis:" value={desc}/>
            {userInfo?.isAdmin === '1' && <div className="books_buttons">
                <NavLink className='btn' to={`/books/edit/${id}`}>Edytuj</NavLink>
            </div>}
            {userInfo && <div className="books_buttons">
                {books.find(book => book.id === id)
                    ? <Btn text='Usuń ze swojej kolekcji' onClick={handleRemoveBookFromCollectionClick}/>
                    : <Btn text='Dodaj do swojej kolekcji' onClick={handleAddBookToCollectionClick}/>}
            </div>}
        </div>
    )
}