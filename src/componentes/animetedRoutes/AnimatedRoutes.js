import React from "react";
import Contact from "../contact/Contact";
import Inicio from '../inicio/Inicio';
import Projects from '../works/Projects';
import About from '../about/About';

import {
    Route,
    Routes,
    useLocation
} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

export default function AnimatedRoutes({tema}) {
    const location = useLocation()
    
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Inicio tema={tema}/>}></Route>
                <Route path="/projects" element={<Projects />}></Route>
                <Route path="/contact" element={<Contact />}></Route>
                <Route path="/about" element={<About />}></Route>
            </Routes>
        </AnimatePresence>
    )
}