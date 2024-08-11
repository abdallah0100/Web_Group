import React from 'react';
import HomePage from './HomePage';
import Electricity from './energy/Electricity';
import NaturalGas from './energy/NaturalGas';
import { Route, Routes } from 'react-router-dom';
import International from './energy/International';

function Content() {
    return (
        <div className="dark:bg-[#003C43] dark:text-white min-h-screen">
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/electricity' element={<Electricity />} />
                <Route path='/natural_gas' element={<NaturalGas />} />
                <Route path='/international' element={<International />} />
            </Routes>
        </div>
    );
}

export default Content;
