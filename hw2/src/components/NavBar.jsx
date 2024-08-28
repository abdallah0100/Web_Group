import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// NavBar component
function NavBar() {
    // State to manage whether the mobile menu is open
    const [isOpen, setIsOpen] = useState(false);

    // State to manage whether dark mode is enabled
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('theme') === 'dark' ||
            (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
    });

    // Effect to add or remove dark mode class based on isDarkMode state
    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [isDarkMode]);

    // Function to toggle the mobile menu
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // Function to toggle the theme between dark and light mode
    const toggleTheme = () => {
        const isDark = !isDarkMode;
        setIsDarkMode(isDark);
        document.documentElement.classList.toggle("dark", isDark);
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    };

    return (
        <header className={`p-4 shadow-lg ${isDarkMode ? 'dark:bg-gray-900 dark:text-gray-200' : 'bg-white text-black'}`}>
            <div className="flex justify-between items-center flex-wrap">
                <div className="w-full flex justify-between items-center">
                    <div className="flex items-center">
                        {/* Hamburger menu icon for mobile view */}
                        <div
                            className={`flex flex-col cursor-pointer sm:hidden ${isDarkMode ? 'dark-hamburger' : 'light-hamburger'}`}
                            onClick={toggleMenu}
                        >
                            <div className="w-6 h-0.5 bg-current mb-1"></div>
                            <div className="w-6 h-0.5 bg-current mb-1"></div>
                            <div className="w-6 h-0.5 bg-current"></div>
                        </div>

                        {/* Navigation links for desktop view */}
                        <nav className={`hidden sm:flex sm:flex-row items-center`}>
                            <Link to="/" className="block py-2 sm:py-0 sm:mr-4">Home</Link>
                            <span className="hidden sm:block">|</span>
                            <Link to="/electricity" className="block py-2 sm:py-0 sm:ml-4 sm:mr-4">Electricity</Link>
                            <span className="hidden sm:block">|</span>
                            <Link to="/natural_gas" className="block py-2 sm:py-0 sm:ml-4 sm:mr-4">Natural Gas</Link>
                            <span className="hidden sm:block">|</span>
                            <Link to="/international" className="block py-2 sm:py-0 sm:ml-4 sm:mr-4">International Energy Data</Link>
                            <span className="hidden sm:block">|</span>
                            <Link to="/favourites" className="block py-2 sm:py-0 sm:ml-4 sm:mr-4">Favourites</Link>
                            <span className="hidden sm:block">|</span>
                            <Link to="/about" className="block py-2 sm:py-0 sm:ml-4 sm:mr-4">About Us</Link>
                            <span className="hidden sm:block">|</span>
                            <Link to="/contact" className="block py-2 sm:py-0 sm:ml-4">Contact</Link>
                        </nav>
                    </div>
                    {/* Button to toggle between dark mode and light mode */}
                    <button className="float-right" onClick={toggleTheme}>
                        {isDarkMode ? "Light Mode" : "Dark Mode"}
                    </button>
                </div>

                {/* Mobile Menu */}
                <nav className={`sm:hidden w-full ${isOpen ? 'block' : 'hidden'} bg-white dark:bg-gray-900 p-4`}>
                    <div className="flex flex-col items-center gap-4">
                        <Link to="/" className="block py-2 text-center">Home</Link>
                        <Link to="/electricity" className="block py-2 text-center">Electricity</Link>
                        <Link to="/natural_gas" className="block py-2 text-center">Natural Gas</Link>
                        <Link to="/international" className="block py-2 text-center">International Energy Data</Link>
                        <Link to="/favourites" className="block py-2 text-center">Favourites</Link>
                        <Link to="/about" className="block py-2 text-center">About Us</Link>
                        <Link to="/contact" className="block py-2 text-center">Contact</Link>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default NavBar;
