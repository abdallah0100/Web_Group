import React from 'react';

// HomePage component
function HomePage() {
    return (
        <div className="min-h-screen bg-gradient-to-r from-[#003C43] to-[#77B0AA] relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-0 left-0 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
            
            {/* Main content area */}
            <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-white bg-opacity-75 relative z-10 dark:bg-gray-900 dark:bg-opacity-75">
                <header className="text-center my-8">
                    <h1 className="text-4xl font-bold text-[#003C43] dark:text-gray-200">Energy Consumption Monitor</h1>
                </header>
                
                {/* Main section */}
                <main className="flex flex-col items-center w-full">
                    {/* Welcome message */}
                    <aside className="w-2/3 p-6 bg-[#77B0AA] bg-opacity-90 dark:bg-gray-700 rounded-lg shadow-lg text-center mb-6">
                        <h2 className="text-2xl font-semibold text-[#003C43] dark:text-gray-300">Welcome!</h2>
                        <p className="mt-4 text-[#003C43] dark:text-gray-200">
                            Welcome to our energy consumption monitoring web app. 
                            Stay informed and manage your energy use effectively.
                        </p>
                    </aside>
                    
                    {/* Information about the app */}
                    <section className="w-2/3 p-6 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-lg text-center mb-6">
                        <p className="text-lg text-[#003C43] dark:text-gray-200">
                            Our app provides comprehensive data on U.S energy consumption
                        </p>
                    </section>
                </main>
            </div>
        </div>
    );
}

export default HomePage;
