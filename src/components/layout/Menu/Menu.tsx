import React from "react";
import {useSelector} from "react-redux";
import {RootState} from "../../../app/store";
import {NavLink, useNavigate} from "react-router-dom";
import {Searchbar} from "../../common/Searchbar/Searchbar";

import './Menu.css';

export const Menu = () => {
    const {userInfo} = useSelector((store: RootState) => store.users);
    const navigate = useNavigate()
    const handleLogoutClick = () => {
        localStorage.clear();
        navigate(0)
    };

    return (
        <div className="menu_container">
            <ul className="menu_links">
                <li className="menu_item">
                    <NavLink to="/">Strona główna</NavLink>
                </li>
                <li className="menu_item">
                    <NavLink to="books">Moje książki</NavLink>
                </li>
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
