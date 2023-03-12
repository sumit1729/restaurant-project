import React from "react";
import {Route, Routes} from 'react-router-dom'
import Menu from "./Menu";
import Home from "./Home";
import Contact from "./Contact";
import About from "./About";


const Body = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/menu" element={<Menu/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/about" element={<About/>}/>
            </Routes>
        </div>
    );
}


export default Body;