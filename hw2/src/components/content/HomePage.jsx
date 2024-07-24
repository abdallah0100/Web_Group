import React from 'react';
import Footer from './Footer';

function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#003C43] to-[#77B0AA] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-white bg-opacity-75 relative z-10 dark:bg-gray-800 dark:bg-opacity-75">
                <header className="text-center my-8">
                    <h1 className="text-4xl font-bold text-[#003C43] dark:text-white">Energy Consumption Monitor</h1>
                </header>
                <main className="flex flex-col items-center w-full">
                    <aside className="w-2/3 p-6 bg-[#77B0AA] bg-opacity-90 dark:bg-[#005f5b] rounded-lg shadow-lg text-center mb-6">
                        <h2 className="text-2xl font-semibold text-[#003C43] dark:text-[#a0d8d8]">Welcome!</h2>
                        <p className="mt-4 text-[#003C43] dark:text-white">
                            Welcome to our energy consumption monitoring web app. 
                            Stay informed and manage your energy use effectively.
                        </p>
                    </aside>
                    
                    <section className="w-2/3 p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-lg text-center mb-6">
                        <p className="text-lg text-[#003C43] dark:text-white">
                            Our app provides comprehensive data on energy consumption to help you monitor and reduce your energy use.
                        </p>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}

export default HomePage;
