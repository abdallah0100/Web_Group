import React from 'react';

// Footer component displays a footer at the bottom of the page
function Footer() {
    return (
        // Footer container with background and text styles
        <footer className="bg-gray-100 dark:bg-gray-900 text-[#003C43] dark:text-gray-200 p-4 text-center text-sm">
            {/* Footer text */}
            <p>© 2024 Energy Consumption Monitor. All rights reserved.</p>
        </footer>
    );
}

export default Footer;
