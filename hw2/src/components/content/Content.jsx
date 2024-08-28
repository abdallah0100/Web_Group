import React from 'react';
import HomePage from './HomePage';
import { Route, Routes } from 'react-router-dom';
import International from './energy/International';
import About from './About';
import Contact from './Contact';
import EnergyPage from './energy/EnergyPage';
import Favourites from './Favourites';

// Content component handles routing for different pages
function Content() {
    return (
        <div className="dark:bg-gray-900 dark:text-gray-200 min-h-screen">
            {/* Routes for different pages */}
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/electricity' element={<EnergyPage key="electricity" energyType='electricity'/>} />
                <Route path='/natural_gas' element={<EnergyPage key="gas" energyType='natural_gas' />} />
                <Route path='/international' element={<International />} />
                <Route path='/favourites' element={<Favourites />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
            </Routes>
        </div>
    );
}

export default Content;
