import React from "react";
import {Btn} from "../../common/Btn/Btn";
import {SimpleBookEntity} from 'types';

import './Book.css';

export const Book = (props: SimpleBookEntity) => {
    return (
        <div className="book_container">
            <div className="book_info">
                <div className="title">
                    <p>Tytuł:</p>
                    <div>{props.title} </div>
                </div>
                <div className="container_author_rating">
                    <div className="author">
                        <p>Autor:</p>
                        <div>{props.author}</div>
                    </div>
                    <div className="rating">
                        <p>Ocena:</p>
                        <div>{props.rating}</div>
                    </div>
                </div>
                <p>Opis:</p>
                <div className="desc">{props.desc}
                </div>
           <Btn text="Pokaż więcej"/>
            </div>
        </div>
    );
}