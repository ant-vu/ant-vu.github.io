import React from 'react';
import Main from './components/Main';
import {AnimatePresence} from 'framer-motion';
import {BrowserRouter as Router, Route, Routes, useLocation} from 'react-router-dom';
import './App.css';

function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Main/>}/>
            </Routes>
        </AnimatePresence>
    );
}

function App() {
    return (
        <Router>
            <AnimatedRoutes/>
        </Router>
    );
}

export default App;