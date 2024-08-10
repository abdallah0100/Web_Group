import React from 'react';
import HomePage from './HomePage';
import DisplayData from './DisplayData';
import Electricity from './energy/Electricity';
import NaturalGas from './energy/NaturalGas';

function Content({ content }) {
    return (
        <div className="dark:bg-[#003C43] dark:text-white min-h-screen">
            {
            content == "show_data" ? <DisplayData /> :
            content == "electricity" ? <Electricity title="Electricity" description="Some description goes here..."/> :
            content == "natural_gas" ? <NaturalGas title="Natural Gas" description="Some description goes here..."/>//:
            //content == "energy3" ? <EnergyDisplayFrame title="Energy 3" description="Some description goes here..."/>
            : <HomePage />}
        </div>
    );
}

export default Content;
