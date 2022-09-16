import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {NavLink, useNavigate} from "react-router-dom";
import {Searchbar} from "../../common/Searchbar/Searchbar";

import './Menu.css';
import {fetchUserByToken} from "../../../features/user/userActions";

export const Menu = () => {
    const {userInfo} = useSelector((store: RootState) => store.users);
    const navigate = useNavigate()
    const handleLogoutClick = () => {
        localStorage.clear();
        navigate(0)
    };

    const userToken = localStorage.getItem('userToken')
        ? localStorage.getItem('userToken')
        : null

    const dispatch = useDispatch()

    useEffect(() => {
        if (userToken) {
            dispatch(fetchUserByToken())
        }
    }, [userToken,dispatch])

    return (
        <div className="menu_container">
            <ul className="menu_links">
                <li className="menu_item">
                    <NavLink to="/">Strona główna</NavLink>
                </li>
                { userInfo && <li className="menu_item">
                    <NavLink to={`/books/collections/${userInfo.id}`}>Moje książki</NavLink>
                </li>}
                {
                    userInfo?.isAdmin === '1' && <li className="menu_item">
                        <NavLink to="books/ad">Dodaj książkę</NavLink>
                    </li>
                }

            </ul>
            <Searchbar/>
            <ul className="menu_links">
                {!userInfo &&
                    <>
                        <li className="menu_item">
                            <NavLink to="/login">Zaloguj</NavLink>
                        </li>
                        <li className="menu_item">
                            <NavLink to="register">Rejestracja</NavLink>
                        </li>
                    </>
                }
                {userInfo && <>
                    <li className='menu_item'>
                        <p className='menu_item'>Witaj {userInfo.name}</p>
                    </li>
                    <li className='menu_item'>
                    <button onClick={handleLogoutClick}>Wyloguj</button>
                </li>
                </>}

            </ul>
        </div>
    )
}
