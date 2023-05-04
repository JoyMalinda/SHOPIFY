import React from "react";
import './App.css';
import NavBar from './NavBar';
import ProductList from "./ProductList";
import {Routes, Route, BrowserRouter} from 'react-router-dom';
import Home from "./Home";

function App(){
    return(
    <BrowserRouter>
    <div>
        <NavBar/>
        <Routes>
            <Route exact path="/Home" element={<Home/>} />
            <Route exact path="/" element={<ProductList/>}/>
        </Routes>
        </div>
    </BrowserRouter>
)}

export default App;