import React from "react";

import './NotFound.css';

export const NotFound = () => {
    return (
        <div className="error_container">
            <div className="error_message">
                <h1>Error 404.</h1>
                <p>Nie znaleziono podanej storny...</p>
            </div>
        </div>
    );
}
