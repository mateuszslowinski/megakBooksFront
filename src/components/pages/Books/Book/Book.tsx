import React from "react";
import {Link} from "react-router-dom";
import {BookElement} from "./BookElement";
import {SimpleBookEntity} from 'types';

import './Book.css';



export const Book = (props: SimpleBookEntity) => {
    return (
        <div className="book_container">
            <div className="book_info">
                <BookElement class="title" header="Tytuł:" value={props.title}/>
                <div className="container_author_rating">
                    <BookElement class="author" header="Autor:" value={props.author}/>
                    <BookElement class="rating" header="Ocena:" value={props.rating}/>
                </div>
                <BookElement class="desc" header="Opis:"
                             value={props.desc.length > 400 ? props.desc.substring(0, 400) + "..." : props.desc}/>
            </div>
            <Link className='btn' to={`/books/${props.id}`}>Pokaż więcej</Link>
        </div>
    );
}