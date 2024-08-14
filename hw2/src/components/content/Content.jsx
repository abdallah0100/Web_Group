import React from 'react';
import HomePage from './HomePage';
import Electricity from './energy/Electricity';
import NaturalGas from './energy/NaturalGas';
import { Route, Routes } from 'react-router-dom';
import International from './energy/International';
import About from './energy/About';
import Contact from './energy/Contact';

function Content() {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-200 min-h-screen">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/electricity' element={<Electricity />} />
                <Route path='/natural_gas' element={<NaturalGas />} />
                <Route path='/international' element={<International />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export default Content;
