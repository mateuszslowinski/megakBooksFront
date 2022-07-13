import React, {useState} from "react";
import {BookForm} from "../BookForm";
import {apiUrl} from "../../../../config/api";

export const AddBookForm = () => {

    const [form, setForm] = useState({
        id: '',
        title: '',
        author: '',
        rating: 0,
        desc: '',
        publisher: '',
        pages: 0,
        species: '',
    });
    const url = `${apiUrl}/books`;

    return (
        <BookForm btnText="Dodaj" method='POST' messageText="dodawanie" urlAddress={url} formValues={form}/>
    )
}