import React from 'react';
import {Route, Routes} from 'react-router-dom';
import {Header} from './components/layout/Header/Header';
import {Menu} from './components/layout/Menu/Menu';
import {Books} from "./components/pages/Books/Books";
import {Home} from './components/pages/Home/Home';
import {ExtendedBook} from './components/pages/Books/Book/ExtendedBook';
import {AddBookForm} from "./components/pages/Forms/AdForm/AddBookForm";
import {EditForm} from './components/pages/Forms/EditForm/EditForm';
import {NotFound} from "./components/pages/NotFound/NotFound";
import { Search } from './components/pages/Search/Search';


import './App.css';





export const App = () => {

    return (
        <div className="App">

            <Header/>
            <Menu/>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path="/books" element={<Books/>}/>
                <Route path="/books/:id" element={<ExtendedBook/>}/>
                <Route path="/books/ad" element={<AddBookForm/>}/>
                <Route path="/books/edit/:id" element={<EditForm/>}/>
                <Route path="/search" element={<Search/>}/>
                <Route path='/search/:term' element={<Search/>}/>
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </div>
    );
}


