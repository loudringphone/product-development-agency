import React from "react";
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'


const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='projects' element={<Projects />} />
            <Route path='contact' element={<Contact />} />

        </Routes>
    )
};
export default Routers;