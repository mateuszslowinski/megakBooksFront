import React from "react";
import {NavLink} from "react-router-dom";
import { Btn } from "../../common/Btn/Btn";

import './NotFound.css';

export const NotFound = () => (
    <div className="error_container">
        <div className="error_message">
            <h1>Error 404.</h1>
            <p>Nie znaleziono podanej storny...</p>
            <NavLink to="/"><Btn text="Strona główna"/></NavLink>
        </div>
    </div>
);

