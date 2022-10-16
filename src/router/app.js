import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import Home from '../components/Home.jsx';
import NavBar from '../components/NavBar.jsx';

export default function App() {
    return (
        <BrowserRouter>
            <NavBar/>
                <Routes>
                    <Route exact path='/' element={<Home/>}/>
                </Routes>
            <Footer/>
        </BrowserRouter>
    )
}