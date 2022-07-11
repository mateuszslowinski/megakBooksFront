import React from 'react';
import {Header} from './components/layout/Header/Header';
import {Menu} from './components/layout/Menu/Menu';
import {Books} from "./components/Books/Books";

import './App.css';



export const App = () => {

    return (
        <div className="App">

            <Header/>
            <Menu/>
            <Books/>

        </div>
    );
}


