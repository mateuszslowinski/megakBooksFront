import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {RootState} from "../../../app/store";
import {UserState} from "../../../features/user/userSlice";
import {userLogin} from '../../../features/user/userActions';
import {emailValidate} from "../../../utils/validate.pattern";
import {Btn} from "../../common/Btn/Btn";

type LoginType = {
    email: string
    password: string
}

export const Login = () => {
    const {userInfo, errorMessage}: UserState = useSelector((store: RootState) => store.users);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        handleSubmit,
        register,
        formState: {
            errors: {email, password},
        },
    } = useForm<LoginType>()

    const onSubmit = async (data: LoginType) => {
        const {email, password} = data
        if (email && password) {
            dispatch(userLogin({email, password}))
        }
    }

    if (userInfo?.id) {
        navigate('/')
    }
    return (
        <>
            <h2>Zaloguj się</h2>
            <form
                className="form_container"
                onSubmit={handleSubmit(onSubmit)}
                noValidate={true}
            >
                {errorMessage && <div className='error_message'>{errorMessage}</div>}
                <input
                    type="email"
                    {...register('email', {
                        required: "Email jest wymagany",
                        pattern: {
                            value: emailValidate,
                            message: `Wymagana porawna forma emaila`,
                        },
                    })}
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
                <Btn text='Zaloguj się'/>
            </form>
        </>
    )
}