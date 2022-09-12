import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUserByToken } from "../../../features/user/userActions";
import './Header.css'

export const Header = () => {
    const userToken = localStorage.getItem('userToken')
        ? localStorage.getItem('userToken')
        : null

    const dispatch = useDispatch()
    useEffect(() => {
        if (userToken) {
            // @ts-ignore
            dispatch(fetchUserByToken())
        }
    }, [userToken, dispatch])

    return (
        <div className="site-header">
            <h1>Twój świat książek</h1>
        </div>
    )
}