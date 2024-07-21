import React from 'react';

function DisplayData() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#003C43] to-[#77B0AA] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-white bg-opacity-75 relative z-10 dark:bg-gray-800 dark:bg-opacity-75">
            </div>
        </div>
    );
}

export default DisplayData;
