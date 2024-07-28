import React from 'react';

function Footer() {
    return (
        <footer className="w-screen bg-[#77B0AA] dark:bg-[#005f5b] text-[#003C43] dark:text-white p-8">
            <div className="flex justify-around text-center mb-4">
                <div>
                    <h2 className="text-2xl font-bold mt-6">E.C.M</h2>
                    <p className="text-[#135D66] dark:text-[#a0d8d8] mt-2">Stay in touch with us:</p>
                    <div className="flex justify-center space-x-4 mt-3">
                        <a href="#" className="text-[#003C43] dark:text-white"><i className="fab fa-instagram"></i></a>
                        <a href="#" className="text-[#003C43] dark:text-white"><i className="fab fa-facebook"></i></a>
                        <a href="#" className="text-[#003C43] dark:text-white"><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mt-6">Developers</h3>
                    <ul className="text-[#135D66] dark:text-[#a0d8d8] mt-2">
                        <li><a href="https://github.com/abdallah0100" className="hover:underline">Abdallah Aburomi</a></li>
                        <li><a href="https://github.com/BolosKh" className="hover:underline">Bolos Khoury</a></li>
                        <li><a href="https://github.com/samarkh2001" className="hover:underline">Sammar Khalil</a></li>
                        <li><a href="https://github.com/mayarsaleh4" className="hover:underline">Mayar Saleh</a></li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-semibold mt-6">Support</h3>
                    <ul className="text-[#135D66] dark:text-[#a0d8d8] mt-2">
                        <li>Chat</li>
                        <li>Contact form</li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
