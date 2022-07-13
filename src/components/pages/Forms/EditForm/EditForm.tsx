import React, {useEffect, useState} from "react";
import {BookForm} from "../BookForm";
import {useParams} from "react-router-dom";
import {Message} from "../../../common/Message/Message";
import {apiUrl} from "../../../../config/api";
import {BookEntity} from "types";


export const EditForm = () => {
    const [form, setForm] = useState<BookEntity>({
        id: '',
        title: '',
        author: '',
        rating: 0,
        desc: '',
        publisher: '',
        pages: 0,
        species: '',
    });

    const [loading, setLoading] = useState(true);
    const {id} = useParams();

    const url = `${apiUrl}/books/${id}`;

    useEffect(() => {
        (async () => {
            const res = await fetch(url)
            const data = await res.json();
            setForm(data);
            setLoading(false);
        })();
    }, [url]);

    if (loading) {
        return <Message text="Wczytywanie danych..."/>
    }

    return (
        <BookForm btnText="Edytuj" method="PATCH" messageText='edycja' urlAddress={url} formValues={form}/>

    )
}