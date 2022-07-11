import React from "react";
import './Book.css';
import {Btn} from "../../common/Btn/Btn";


export const Book = () => {
    return (
        <div className="book_container">
            <div className="book_info">
                <div className="title">
                    <p>Tytuł:</p>
                    <div>Dłuższy tytuł co pokaże mi wielkość miejsca dostępnego albo coś część IV </div>
                </div>
                <div className="container_author_rating">
                    <div className="author">
                        <p>Autor:</p>
                        <div>Andzrzej Jan</div>
                    </div>
                    <div className="rating">
                        <p>Ocena:</p>
                        <div>9.3</div>
                    </div>
                </div>
                <p>Opis:</p>
                <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis enim eum
                    mollitia saepe. Consequatur corporis distinctio doloribus exercitationem fugit illo molestias natus
                    nemo numquam, officia rem sint ut veniam?
                </div>
           <Btn text="Więcej"/>
            </div>
        </div>
    );
}