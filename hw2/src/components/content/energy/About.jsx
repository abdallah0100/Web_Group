import React from 'react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#003C43] to-[#77B0AA] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-white bg-opacity-75 relative z-10 dark:bg-gray-900 dark:bg-opacity-75">
        <header className="text-center my-8">
          <h1 className="text-4xl font-bold text-[#003C43] dark:text-gray-200">About Us</h1>
        </header>
        <main className="max-w-6xl w-full p-8 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-lg">
          
          {/* Introduction */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-[#003C43] dark:text-gray-300 mb-4">Welcome to E.C.M!</h2>
            <p className="text-lg text-[#003C43] dark:text-gray-200">
              E.C.M (Energy Consumption Monitor) is your comprehensive platform for monitoring and analyzing energy consumption data. Whether you're a homeowner, business owner, or researcher, our platform provides you with the tools to track energy usage effectively.
            </p>
          </section>

          {/* Key Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-semibold text-[#003C43] dark:text-gray-300 mb-4 text-center">Key Features</h2>
            <ul className="list-disc pl-5 text-[#003C43] dark:text-gray-200">
              <li><strong>Energy Data Insights:</strong> Access detailed data on natural gas and electricity consumption.</li>
              <li><strong>International Energy Data:</strong> Compare energy usage trends across different countries and regions.</li>
              <li><strong>User-Friendly Interface:</strong> Simple, intuitive design for easy navigation and data analysis.</li>
              <li><strong>Customizable Reports:</strong> Generate custom reports to suit your specific needs.</li>
              <li><strong>Real-Time Updates:</strong> Stay informed with up-to-date information on energy consumption.</li>
            </ul>
          </section>

          {/* Our Mission */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-[#003C43] dark:text-gray-300 mb-4">Our Mission</h2>
            <p className="text-lg text-[#003C43] dark:text-gray-200">
              Our mission is to empower individuals and organizations to make informed decisions about their energy consumption. By providing accurate and comprehensive data, E.C.M aims to promote energy efficiency and support sustainable energy practices worldwide.
            </p>
          </section>

          {/* Our Team */}
          <section className="mb-12 text-center">
            <h2 className="text-3xl font-semibold text-[#003C43] dark:text-gray-300 mb-4">Meet Our Team</h2>
            <p className="text-lg text-[#003C43] dark:text-gray-200">
              We are a group of passionate software engineering students working on a web development project as part of our academic journey. Our goal is to create innovative solutions that can make a real difference in how energy consumption is monitored and managed.
            </p>
            <p className="text-lg text-[#003C43] dark:text-gray-200 mt-4">
              Our team members are:
            </p>
            <ul className="text-lg text-[#003C43] dark:text-gray-200 mt-4">
              <li><a href="https://github.com/abdallah0100" className="hover:underline">Abdallah Aburomi</a></li>
              <li><a href="https://github.com/BolosKh" className="hover:underline">Bolos Khoury</a></li>
              <li><a href="https://github.com/samarkh2001" className="hover:underline">Sammar Khalil</a></li>
              <li><a href="https://github.com/mayarsaleh4" className="hover:underline">Mayar Saleh</a></li>
            </ul>
            <p className="text-lg text-[#003C43] dark:text-gray-200 mt-8">
              Together, we are committed to leveraging our skills and knowledge to deliver a product that is both functional and impactful. Thank you for supporting us on this exciting journey!
            </p>
          </section>

          {/* Contact Information */}
          <section className="pt-6 rounded-lg shadow-lg p-6 bg-[#77B0AA] bg-opacity-90 dark:bg-gray-700 dark:text-gray-200">
            <h2 className="text-xl font-semibold mb-2">Get in Touch</h2>
            <p>
              Have questions or feedback? Reach out to us through the following channels:
            </p>
            <ul className="list-disc pl-5">
              <li><strong>Address:</strong> <a href="https://www.google.com/maps/search/?api=1&query=סנונית+51+ת.ד+78,+Karmiel,+2161002,+Israel" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">סנונית 51 ת.ד 78, Karmiel, 2161002, Israel</a></li>
              <li><strong>Phone:</strong> <a href="tel:+972501234567" className="text-blue-500 hover:underline">050-1234567</a></li>
              <li><strong>Email:</strong> <a href="mailto:energy@gmail.com" className="text-blue-500 hover:underline">energy@gmail.com</a></li>
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};

export default AboutUs;
