import React from 'react';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import About from "./components/About/About.tsx";
import Contact from "./components/Contact/Contact.tsx";
import City from "./components/City/City.tsx";
import Login from "./components/Login/Login.tsx"
import Signup from "./components/Signup/Signup.tsx"

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                 <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/:cityName" element={<City />} />
                 <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </Router>
    );
}

export default App;