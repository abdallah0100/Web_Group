import React, { useState } from 'react';

const Contact = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    // Update the corresponding state property with the new value
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submitted');
    // Reset form fields after submission
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#003C43] to-[#77B0AA] relative overflow-hidden">
      {/* Background blob animations */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
      
      {/* Main container for the form and content */}
      <div className="flex flex-col items-center justify-between min-h-screen p-4 bg-white bg-opacity-75 relative z-10 dark:bg-gray-900 dark:bg-opacity-75">
        <header className="text-center mt-4 mb-2">
          <h1 className="text-4xl font-bold text-[#003C43] dark:text-gray-200">Let's Connect</h1>
        </header>

        <main className="max-w-6xl w-full p-8 bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 rounded-lg shadow-lg">
          
          {/* Contact Information Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
            {/* Office Address */}
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#003C43] dark:text-gray-300">Our Main Office</h2>
              <p className="text-lg text-[#003C43] dark:text-gray-200">
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=סנונית+51+ת.ד+78,+Karmiel,+2161002,+Israel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  סנונית 51 ת.ד 78, Karmiel, 2161002, Israel
                </a>
              </p>
            </div>

            {/* Phone Number */}
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#003C43] dark:text-gray-300">Phone Number</h2>
              <p className="text-lg text-[#003C43] dark:text-gray-200">
                <a href="tel:+972501234567" className="hover:underline">050-1234567</a>
              </p>
            </div>

            {/* Fax Number */}
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#003C43] dark:text-gray-300">Fax</h2>
              <p className="text-lg text-[#003C43] dark:text-gray-200">
                <a href="tel:+972507654321" className="hover:underline">050-7654321</a>
              </p>
            </div>

            {/* Email Address */}
            <div>
              <h2 className="text-2xl font-semibold mb-2 text-[#003C43] dark:text-gray-300">Mail</h2>
              <p className="text-lg text-[#003C43] dark:text-gray-200">
                <a href="mailto:energy@gmail.com" className="hover:underline">energy@gmail.com</a>
              </p>
            </div>
          </div>

          {/* Contact Form and Additional Information */}
          <div className="flex flex-col md:flex-row gap-10 mb-1">
            {/* Contact Form */}
            <form onSubmit={handleSubmit} className="w-full md:2 space-y-6 pb-96">
              <div>
                <label htmlFor="nameField" className="block text-lg font-medium text-[#003C43] dark:text-gray-300">Enter your Name</label>
                <input
                  type="text"
                  id="nameField"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#003C43] rounded-lg dark:border-gray-300 bg-white dark:bg-gray-800 text-[#003C43] dark:text-gray-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="emailField" className="block text-lg font-medium text-[#003C43] dark:text-gray-300">Enter a valid email address</label>
                <input
                  type="email"
                  id="emailField"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-[#003C43] rounded-lg dark:border-gray-300 bg-white dark:bg-gray-800 text-[#003C43] dark:text-gray-200"
                  required
                />
              </div>

              <div>
                <label htmlFor="messageField" className="block text-lg font-medium text-[#003C43] dark:text-gray-300">Enter your message</label>
                <textarea
                  id="messageField"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 border border-[#003C43] rounded-lg dark:border-gray-300 bg-white dark:bg-gray-800 text-[#003C43] dark:text-gray-200"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#003C43] text-white font-semibold rounded-lg hover:bg-[#002F36] dark:bg-gray-300 dark:text-[#003C43] dark:hover:bg-gray-400 dark:hover:text-white"
              >
                Submit
              </button>
            </form>

            {/* Additional Information */}
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-2xl font-bold mb-2 text-[#003C43] dark:text-gray-300">We Are Here 24/7</h2>
              <p className="text-lg text-[#003C43] dark:text-gray-200">Message us anytime</p>
              <p className="text-lg text-[#003C43] dark:text-gray-200">or Phone us</p>
              <p className="text-lg text-[#003C43] dark:text-gray-200">Mon-Thu 8:30-17:00</p>
            </div>
          </div>

          {/* Mission Statement Block */}
          <div className="pt-6 rounded-lg shadow-lg p-6 bg-[#77B0AA] bg-opacity-90 dark:bg-gray-700 dark:text-gray-200">
            <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
            <p>We are dedicated to providing exceptional service and support. Feel free to reach out to us with any questions or feedback. Your satisfaction is our priority!</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Contact;
