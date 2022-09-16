import React, {SyntheticEvent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Btn} from "../../common/Btn/Btn";
import {TextInput} from "../../common/Inputs/TextInput";
import {NumberInput} from "../../common/Inputs/NumberInput";
import {BookEntity} from 'types'

import './BookForm.css';

interface Props {
    btnText: string;
    method: string;
    messageText: string;
    urlAddress: string;
    formValues: BookEntity;
}

export const BookForm = ({btnText,method,messageText,urlAddress,formValues}: Props) => {

    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [resId, setResId] = useState('');

    const [form, setForm] = useState({
        title: formValues.title ,
        author: formValues.author,
        rating: formValues.rating,
        desc: formValues.desc,
        publisher: formValues.publisher,
        pages: formValues.pages,
        species: formValues.species,
    });

    const updateForm = (key: string, value: any) => {
        setForm(form => ({
            ...form,
            [key]: value,
        }));
    };



    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
            const res = await fetch(urlAddress, {
                method,
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({...form})
            });
            const data = await res.json();
            setResId(data.id);
        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return <h2>Trwa {messageText} książki</h2>
    }
    if (resId) {
        navigate('/');
    }

    return (
        <form action="" className='form' onSubmit={submit}>
            <h2>{messageText} książki </h2>
            <TextInput header="Tytuł:" name="text" maxLength={200} value={form.title}
                       onChange={e => updateForm('title', e.target.value)}/>
            <TextInput header="Autor:" name="author" maxLength={100} value={form.author}
                       onChange={e => updateForm('author', e.target.value)}/>
            <NumberInput header='Ocena:' name="rating" min={1} max={10} value={form.rating}
                         onChange={e => updateForm('rating', Number(e.target.value))}/>
            <p>
                <label>
                    Opis:<br/>
                    <textarea
                        name="desc"
                        maxLength={2000}
                        value={form.desc}
                        onChange={e => updateForm('desc', e.target.value)}
                    />
                </label>
            </p>
            <TextInput header='Wydawca:' name="publisher" maxLength={100} value={form.publisher}
                       onChange={e => updateForm('publisher', e.target.value)}/>
            <NumberInput header="Liczba Stron:" name="pages" min={1} max={9999} value={form.pages}
                         onChange={e => updateForm('pages', Number(e.target.value))}/>
            <TextInput header="Gatunek:" name='species' maxLength={36} value={form.species}
                       onChange={e => updateForm('species', e.target.value)}/>
            <Btn text={btnText}/>
        </form>
    )
}