import React, {useEffect, useState} from "react";
import {BookForm} from "../BookForm";
import {useParams} from "react-router-dom";

export const EditForm = () => {

    const [form, setForm] = useState({
        id: '',
        title:'',
        author: '',
        rating: 0,
        desc: '',
        publisher: '',
        pages: 0,
        species: '',
    });

    const {id} = useParams();
    const url = `http://localhost:3001/books/${id}`;

    useEffect(() => {
        (async () => {
            const res = await fetch(url)
            const data = await res.json();
            setForm(data);
        })()
    }, [url]);

    return (
        <BookForm btnText="Edytuj" method="PATCH" messageText='edycja' urlAddress={url} formValues={form}/>
    )
}