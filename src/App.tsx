import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/layout/Header/Header';
import {Menu} from './components/layout/Menu/Menu';
import {Books} from "./components/pages/Books/Books";
import {Home} from './components/pages/Home/Home';
import {NotFound} from "./components/pages/NotFound/NotFound";

import './App.css';



export const App = () => {

    return (
        <div className="App">

            <Header/>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}


