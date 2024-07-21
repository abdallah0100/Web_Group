import React from 'react';
import HomePage from './HomePage';
import DisplayData from './DisplayData';

function Content({ content }) {
    return (
        <div className="dark:bg-[#003C43] dark:text-white min-h-screen">
            {content === "show_data" ? <DisplayData /> : <HomePage />}
        </div>
    );
}

export default Content;
