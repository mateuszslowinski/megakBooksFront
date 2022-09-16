import React from "react";
import {Link} from "react-router-dom";
import {BookElement} from "./BookElement";
import {SimpleBookEntity} from 'types';

import './Book.css';

export const Book = ({title, author, rating, desc, id}: SimpleBookEntity) => (
    <div className="book_container">
        <div className="book_info">
            <BookElement className="title" header="Tytuł:" value={title}/>
            <div className="container_author_rating">
                <BookElement className="author" header="Autor:" value={author}/>
                <BookElement className="rating" header="Ocena:" value={rating}/>
            </div>
            <BookElement className="desc" header="Opis:"
                         value={desc.length > 400 ? desc.substring(0, 400) + "..." : desc}/>
        </div>
        <Link className='btn' to={`/books/${id}`}>Pokaż więcej</Link>
    </div>
)
