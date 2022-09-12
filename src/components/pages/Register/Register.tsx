import React, {useState} from "react";
import axios from "axios";
import {apiUrl} from "../../../config/api";
import {useNavigate} from "react-router-dom";
import {useForm} from "react-hook-form";
import {Btn} from "../../common/Btn/Btn";
import {emailValidate} from "../../../utils/validate.pattern";

import './Register.css';

type RegisterFormType = {
    name: string
    email: string
    password: string
}

export const Register = () => {

    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const [openMessage, setOpenMessage] = useState<boolean>(false);
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: {
            errors: {email, password, name},
        },
    } = useForm<RegisterFormType>();


    const onSubmit = async ({name, email, password}: RegisterFormType) => {
        try {
            const res = await axios.post(`${apiUrl}/users/register`, ({name, email, password}), {
                headers: {
                    "Content-Type": "application/json"
                },
            },);
            console.log(res)
            if (res.status === 201) {
                setOpenMessage(true);
                setTimeout(() => {
                    setOpenMessage(false)
                    navigate('/login')
                }, 1500);
            }
        } catch (error: any) {
            setErrorMessage(error.response?.data.message)
        }
    }

    const handleChange = () => {
        setErrorMessage(null)
    };


    return (
        <>
            <h2>Rejestracja</h2>
            {openMessage && <div className='confirm_message'>Zostałeś zarejstrowany!</div>}
            <form
                className="form_container"
                onSubmit={handleSubmit(onSubmit)}
                noValidate={true}
            >
                {errorMessage && <div className='error_message'>{errorMessage}</div>}
                <input
                    type="text"
                    {...register('name', {
                        required: "Nazwa użytkownika jest wymagana",
                        maxLength: {
                            value: 20,
                            message: "Nazwa użytkownika nie może być dłuższa niż 20 znaków"
                        }
                    })}
                    placeholder="Nazwa użytkownika..."
                /> {name && <div className='error_message'>{name.message}</div>}
                <input
                    type="email"
                    {...register('email', {
                        required: "Email jest wymagany",
                        pattern: {
                            value: emailValidate,
                            message: `Email musi zawierać @`,
                        },
                    })}
                    onChange={handleChange}
                    placeholder="Email..."
                />
                {email && <div className='error_message'>{email.message}</div>}
                <input
                    type="password"
                    {...register('password', {
                        required: `Hasło jest wymagane`,
                        maxLength: {
                            value: 15,
                            message: "Hasło nie może być dłuższe niż 15 znaków"
                        },
                    })}
                    placeholder="Hasło..."
                />
                {password && <div className='error_message'>{password.message}</div>}
                <Btn text='Zarejestruj się'/>
            </form>
        </>
    )
}