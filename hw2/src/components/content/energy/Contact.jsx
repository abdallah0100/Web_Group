import React, { useState } from 'react';

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Show alert and clear form fields
    alert('Submitted');
    setFormData({
      name: '',
      email: '',
      message: ''
    });
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 p-8">
      <div className="max-w-4xl mx-auto">
        {/* Main heading */}
        <h1 className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white">LET'S CONNECT</h1>

        {/* Contact Information Grid */}
        <div className="grid grid-cols-2 gap-10 mb-8">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">OUR MAIN OFFICE</h2>
            <p className="text-gray-600 dark:text-gray-400">94 Broadway St Tel Aviv, 61000 Israel</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">PHONE NUMBER</h2>
            <p className="text-gray-600 dark:text-gray-400">234-9876-5400</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">FAX</h2>
            <p className="text-gray-600 dark:text-gray-400">1-234-567-8900</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-200">MAIL</h2>
            <p className="text-gray-600 dark:text-gray-400">energy@gmail.com</p>
          </div>
        </div>

        {/* Contact Form and Additional Information */}
        <div className="flex gap-10 mb-8">
          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="w-1/2 space-y-6">
            <div>
              <label htmlFor="nameField" className="block text-lg font-medium text-gray-900 dark:text-gray-200">Enter your Name</label>
              <input
                type="text"
                id="nameField"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                required
              />
            </div>
            <div>
              <label htmlFor="emailField" className="block text-lg font-medium text-gray-900 dark:text-gray-200">Enter a valid email address</label>
              <input
                type="email"
                id="emailField"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                required
              />
            </div>
            <div>
              <label htmlFor="messageField" className="block text-lg font-medium text-gray-900 dark:text-gray-200">Enter your message</label>
              <textarea
                id="messageField"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600"
            >
              Submit
            </button>
          </form>

          {/* Additional Information */}
          <div className="w-1/2 space-y-6">
            <h2 className="text-2xl font-bold mb-2 text-gray-800 dark:text-gray-200">WE ARE HERE 24/7</h2>
            <p className="text-lg text-gray-700 dark:text-gray-400">AVAILABLE 24 HOURS A DAY!</p>
            <p className="text-lg text-gray-700 dark:text-gray-400">MON-FRI 8:30AM-5PM </p>
            <p className="text-lg text-gray-700 dark:text-gray-400">PHONES ARE OPEN 24/7</p>
          </div>
        </div>

        {/* New Div Block */}
        <div className="pt-6 rounded-lg shadow-lg p-6 dark:bg-[#003C43] dark:text-white">
          <h1 className="text-xl font-semibold mb-2">OUR MISSION</h1>
          <p>We are dedicated to providing exceptional service and support. Feel free to reach out to us with any questions or feedback. Your satisfaction is our priority!</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
