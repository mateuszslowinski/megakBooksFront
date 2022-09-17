import React, {useEffect, useState} from "react";
import {Pagination} from "../../common/Pagination/Pagination";
import {Book} from "./Book/Book";
import {Message} from "../../common/Message/Message";
import './Books.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {UserState} from "../../../features/user/userSlice";
import {getUserBooks,} from "../../../features/user/userActions";
import {useNavigate} from "react-router-dom";


export const Books = () => {
    const {books,userInfo}: UserState = useSelector((store: RootState) => store.users);

    const [pageNumber, setPageNumber] = useState<number>(0);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const bookPerPage = 8;
    const pagesVisited = pageNumber * bookPerPage;

    const pageCount = Math.ceil(books.length / bookPerPage)


    useEffect(() => {
        dispatch(getUserBooks());
        setLoading(false)
    }, [dispatch])

    const changePage = ({selected}: { selected: number }): void => {
        setPageNumber(selected);
    };

    if (loading) {
        return <Message text="Wczytywanie danych..."/>
    }

    if (!userInfo) {
        navigate('/')
    }
    return (
        <> {books.length !== 0
            ? <>
                <h2>Twoje książki:</h2>
                <div className='books_container'>
                    {books.slice(pagesVisited, pagesVisited + bookPerPage).map(book => (
                        <Book
                            key={book.id}
                            {...book}
                        />
                    ))}
                    <Pagination pageCount={pageCount} onChange={changePage}/>
                </div>
            </>
            : <Message text="Dodaj książki do swojej biblioteki"/>}
        </>
    )
}